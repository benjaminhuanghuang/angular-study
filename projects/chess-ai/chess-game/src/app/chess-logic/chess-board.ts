
import { Color, Coords, FENChar } from "./models";
import { Bishop } from "./pieces/bishop";
import { King } from "./pieces/king";
import { Knight } from "./pieces/knight";
import { Pawn } from "./pieces/pawn";
import { Piece } from "./pieces/piece";
import { Queen } from "./pieces/queen";
import { Rook } from "./pieces/rook";


export class ChessBoard {
  private chessBoard: (Piece | null)[][];
  private readonly chessBoardSize: number = 8;
  private _playerColor = Color.White;
  private fiftyMoveRuleCounter: number = 0;
  constructor() {
    this.chessBoard = [
      [
        new Rook(Color.White), new Knight(Color.White), new Bishop(Color.White), new Queen(Color.White),
        new King(Color.White), new Bishop(Color.White), new Knight(Color.White), new Rook(Color.White)
      ],
      [
        new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White),
        new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White)
      ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [
        new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black),
        new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black)
      ],
      [
        new Rook(Color.Black), new Knight(Color.Black), new Bishop(Color.Black), new Queen(Color.Black),
        new King(Color.Black), new Bishop(Color.Black), new Knight(Color.Black), new Rook(Color.Black)
      ],
    ];
    // this._safeSquares = this.findSafeSqures();
    // this._gameHistory = [{ board: this.chessBoardView, lastMove: this._lastMove, checkState: this._checkState }];
  }

  public get playerColor(): Color {
    return this._playerColor;
  }

  public get chessBoardView(): (FENChar | null)[][] {
    return this.chessBoard.map(row => {
      return row.map(piece => piece instanceof Piece ? piece.FENChar : null);
    })
  }

  /**
   Draw the chess board white/black squares
   [ngClass]="{
        'dark': isSquareDark(x, y),
        'light': !isSquareDark(x, y),
      }">
  */
  public static isSquareDark(x: number, y: number): boolean {
    return x % 2 === 0 && y % 2 === 0 || x % 2 === 1 && y % 2 === 1;
  }
}
