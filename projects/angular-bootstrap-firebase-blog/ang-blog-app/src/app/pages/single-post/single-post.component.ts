import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  postData: any;
  similarPostArray!: Array<any>;

  constructor(private route: ActivatedRoute, private postService: PostsService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postService.countViews(params['id']);

      this.postService.loadOnePost(params['id']).subscribe(data => {
        this.postData = data;
        this.loadSimilarPost(this.postData.category.categoryId);
      });
    });
  }

  loadSimilarPost(catId: string) {
    this.postService.loadSimilar(catId).subscribe(data => {
      this.similarPostArray = data;
    });
  }
}
