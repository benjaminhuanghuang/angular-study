import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";


@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {
  constructor(private dialog: MatDialog) { }

  public playAgainstComputer(): void {
    //this.dialog.open(PlayAgainstComputerDialogComponent);
  }
}
