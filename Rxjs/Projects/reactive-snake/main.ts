import { animationFrameScheduler, BehaviorSubject, combineLatest, Observable, of, fromEvent, interval } from 'rxjs';

import {
    map,
    filter,
    scan,
    startWith,
    distinctUntilChanged,
    share,
    withLatestFrom,
    tap,
    skip,
    switchMap,
    takeWhile,
    first
} from 'rxjs/operators';
// 
import { DIRECTIONS, SPEED, SNAKE_LENGTH, FPS, APPLE_COUNT, POINTS_PER_APPLE } from './constants';
import { Key, Point2D, Scene } from './types';
import {
    createCanvasElement,
    renderScene,
    renderApples,
    renderSnake,
    renderScore,
    renderGameOver,
    getRandomPosition,
    checkCollision
} from './canvas';

import {
    isGameOver,
    nextDirection,
    move,
    eat,
    generateSnake,
    generateApples
} from './utils';

/**
 * Create canvas element and append it to the page
 */
let canvas = createCanvasElement();
let ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

/**
 * Starting values
 */
const INITIAL_DIRECTION = DIRECTIONS[Key.RIGHT];

let ticks$ = interval(SPEED);

let click$ = fromEvent(document, 'click');
let keydown$ = fromEvent<KeyboardEvent>(document, 'keydown');

function createGame(fps$: Observable<number>): Observable<Scene> {

    const direction$ = keydown$.pipe(
        map((event: KeyboardEvent) => DIRECTIONS[event.key]),
        filter(direction => !!direction), // filter the key that is not in the DIRECTIONS
        startWith(INITIAL_DIRECTION), //
        scan(nextDirection), // ignore the opposite direction
        distinctUntilChanged()
    );

    let length$ = new BehaviorSubject<number>(SNAKE_LENGTH);

    let snakeLength$ = length$.pipe(
        scan((step, snakeLength) => snakeLength + step),
        share()
    );

    let score$ = snakeLength$.pipe(
        startWith(0),
        scan((score, _) => score + POINTS_PER_APPLE),
    );

    let snake$: Observable<Array<Point2D>> = ticks$.pipe(
        //withLatestFrom(direction$, snakeLength$, (_, direction, snakeLength) => [direction, snakeLength]),
        withLatestFrom<number, [any, any], [any, any]>(direction$, snakeLength$, (_, direction, snakeLength) => [direction, snakeLength]),
        scan(move, generateSnake()),
        share()
    );

    let apples$ = snake$.pipe(
        scan(eat, generateApples()),
        distinctUntilChanged(),
        share()
    );

    let appleEaten$ = apples$.pipe(
        skip(1),
        tap(() => length$.next(POINTS_PER_APPLE))
    ).subscribe();

    let scene$: Observable<Scene> = combineLatest(snake$, apples$, score$, (snake, apples, score) => ({ snake, apples, score }));

    return fps$.pipe(withLatestFrom(scene$, (_, scene) => scene));
}

let game$ = of('Start Game').pipe(
    map(() => interval(1000 / FPS, animationFrameScheduler)),
    switchMap(createGame),
    takeWhile(scene => !isGameOver(scene))
);

const startGame = () => game$.subscribe({
    next: (scene) => {
        if (ctx != null) {
            renderScene(ctx, scene)
        }
    },
    complete: () => {
        if (ctx != null) {
            renderGameOver(ctx);
        }
        click$.pipe(first()).subscribe(startGame);
    }
});

startGame();
