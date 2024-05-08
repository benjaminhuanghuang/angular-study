# Code a Chess Game with Stockfish API – JavaScript Tutorial

<https://www.youtube.com/watch?v=fJIsqZmQVZQ>

<https://github.com/awsomeCStutorials/chess-game>

20m

1. Create chess logic under src/app/chess-logic

2. Chess board
Create components

```bash
ng g c modules/chess-board --skip-tests
```

Draw chess board in black and white squares

Draw the pieces with images on the chess board.

3. To determine if one side is in check

Loop through each piece of opposite color
Loop through each of its attacking square
if one of the attacking square contains king with
the opposite color of piece that is attacking
THEN
position is in cheek
If no such a square exist there is no check

```ts
public isInCheck(playerColor: Color, checkingCurrentPosition: boolean): boolean {

}
```

4. findSafeSquares
  
FUNCTION findSafeSquares: Map of player available squares
Initally:
new Map<string, Coords []>():
define empty map for player available squares
key = x + "," + y;
Foreach square in chess board
if square doesn't have piece OR piece on square has different color than current player: CONT
define list of coordinates for piece safe squares
Foreach direction of piece direcions:
declare newX and new Y coordinates
if coordinates are out of range: CONTINUE
declare piece on new coordinates as newPiece
if newPiece is not null AND newPiece.color === piece.color: CONTINUE
if (position is SAFE after move) THEN update piece safe squares list
Checking if there is possiblity for en passant and castling
If piece have safe squares append it to player map
