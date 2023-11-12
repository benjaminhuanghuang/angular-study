import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  permalink: string = '';
  imgSrc: any = './assets/placeholder-image.jpg';
  selectedImg: any = null;

  categories: Array<any> = [];
  postForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(1)]],
    permalink: ['', [Validators.required]],
    excerpt: ['', [Validators.required, Validators.minLength(1)]],
    category: ['', [Validators.required]],
    postImg: ['', [Validators.required]],
    content: ['', [Validators.required]],
  });

  constructor(private categoryService: CategoriesService, private fb: FormBuilder, private postService: PostsService) {
  }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val => {
      this.categories = val;
    });
  }

  get fc() {
    return this.postForm.controls;
  }

  onTitleChanged($event: any) {
    const title = $event.target.value;
    this.permalink = title.replace(/\s/g, '-');
  }

  showPreview($event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgSrc = e.target?.result;
    }
    reader.readAsDataURL($event.target.files[0]);
    this.selectedImg = $event.target.files[0];
  }

  onSubmit() {
    const splitted = this.postForm.value.category?.split('-');
    const postData: Post = {
      title: this.postForm.value.title ?? '',
      permalink: this.postForm.value.permalink ?? '',
      category: {
        categoryId: splitted?.[0] ?? '',
        category: splitted?.[1] ?? '',
      },
      postImgPath: '',
      excerpt: this.postForm.value.excerpt ?? '',
      content: this.postForm.value.content ?? '',
      isFeatured: false,
      views: 0,
      status: 'new',
      createdAt: new Date()
    };

    console.log(postData);

    this.postService.uploadImage(this.selectedImg);
  }
}
