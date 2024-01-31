import { Directions } from './types';

export const COLS = 30;
export const ROWS = 30;
export const GAP_SIZE = 1;
export const CELL_SIZE = 10;
export const CANVAS_WIDTH = COLS * (CELL_SIZE + GAP_SIZE);
export const CANVAS_HEIGHT = ROWS * (CELL_SIZE + GAP_SIZE);

export const SNAKE_LENGTH = 5;

export const APPLE_COUNT = 2;
export const POINTS_PER_APPLE = 1;

export const SPEED = 200;
export const FPS = 60;

export const DIRECTIONS: Directions = {
  37: { x: -1, y: 0 },   // left
  39: { x: 1, y: 0 },    // right
  38: { x: 0, y: -1 },   // up
  40: { x: 0, y: 1 }     //down  
};
