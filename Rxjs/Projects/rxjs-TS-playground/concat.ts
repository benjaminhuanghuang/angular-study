import { interval, of, concat } from 'rxjs';

const infiniteSource$ = interval(1000);
const source1$ = of(1, 2, 3);  // emitted after pervious source complete
const source2$ = of(4, 5, 6);

// source1$, source2$ were blocked by infiniteSource$
const result$ = concat(infiniteSource$, source1$, source2$);

result$.subscribe(console.log);