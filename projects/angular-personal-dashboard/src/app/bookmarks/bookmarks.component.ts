import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
//
import { BookmarkTileComponent } from '../bookmark-tile/bookmark-tile.component';
import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-bookmarks',
  standalone: true,
  imports: [
    CommonModule,  // for the ngFor directive
    RouterLink,
    BookmarkTileComponent,
  ],
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.scss'
})
export class BookmarksComponent {
  bookmarks: Bookmark[] = [];

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.bookmarks = this.bookmarkService.getBookmarks()
  }
}
