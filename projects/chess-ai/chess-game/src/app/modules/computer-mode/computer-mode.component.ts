import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { Subscription, firstValueFrom } from 'rxjs';
//
import { ChessBoardComponent } from '../chess-board/chess-board.component';
import { StockfishService } from './stockfish.service';
import { ChessBoardService } from '../chess-board/chess-board.service';
import { Color } from '../../chess-logic/models';
import { MoveListComponent } from '../move-list/move-list.component';

/*
  Using the same template and styles as the ChessBoardComponent
  Need to import MoveListComponent. otherwise, NG8001: 'app-move-list' is not a known element:
*/
@Component({
  selector: 'app-computer-mode',
  standalone: true,
  imports: [CommonModule, MoveListComponent],
  templateUrl: '../chess-board/chess-board.component.html',
  styleUrl: '../chess-board/chess-board.component.css'
})
export class ComputerModeComponent extends ChessBoardComponent implements OnInit, OnDestroy {
  private computerSubscriptions$ = new Subscription();

  constructor(private stockfishService: StockfishService) {
    super(inject(ChessBoardService));
  }

  public override ngOnInit(): void {
    super.ngOnInit();

    const computerConfiSubscription$: Subscription = this.stockfishService.computerConfiguration$.subscribe({
      next: (computerConfiguration) => {
        if (computerConfiguration.color === Color.White) this.flipBoard();
      }
    });

    const chessBoardStateSubscription$: Subscription = this.chessBoardService.chessBoardState$.subscribe({
      next: async (FEN: string) => {
        if (this.chessBoard.isGameOver) {
          chessBoardStateSubscription$.unsubscribe();
          return;
        }

        const player: Color = FEN.split(" ")[1] === "w" ? Color.White : Color.Black;
        if (player !== this.stockfishService.computerConfiguration$.value.color) return;

        const { prevX, prevY, newX, newY, promotedPiece } = await firstValueFrom(this.stockfishService.getBestMove(FEN));
        this.updateBoard(prevX, prevY, newX, newY, promotedPiece);
      }
    });

    this.computerSubscriptions$.add(chessBoardStateSubscription$);
    this.computerSubscriptions$.add(computerConfiSubscription$);
  }

  public override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.computerSubscriptions$.unsubscribe();
  }
}
