import { Component } from '@angular/core';
//
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent {
  postArray: Array<any> = [];

  constructor(private postService: PostsService) {
    this.postService.loadData().subscribe(val => {
      this.postArray = val;
    });
  }
}
