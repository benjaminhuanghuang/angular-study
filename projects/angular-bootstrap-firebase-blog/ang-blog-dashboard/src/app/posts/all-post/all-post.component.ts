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

  onDelete(postImgPath: string, id: string) {
    this.postService.deleteImage(postImgPath, id);
  }

  onFeatured(id: string, featured: boolean) {
    const featuredData: any = {
      isFeatured: featured
    }
    this.postService.markFeatured(id, featuredData);
  }
}
