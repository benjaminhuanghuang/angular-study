import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredPostsArray!: Array<any>;
  latestPostsArray!: Array<any>;

  constructor(private postService: PostsService) {

  }

  ngOnInit(): void {
    this.postService.loadData().subscribe(data => {
      this.featuredPostsArray = data;
    });

    this.postService.loadLatest().subscribe(data => {
      this.latestPostsArray = data;
    });
  }
}
