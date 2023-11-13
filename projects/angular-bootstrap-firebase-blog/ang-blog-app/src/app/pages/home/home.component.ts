import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredPostsArray!: Array<any>;

  constructor(private postService: PostsService) {
    this.postService.loadData().subscribe(data => {
      this.featuredPostsArray = data;
    });
  }

  ngOnInit(): void {

  }
}
