import { Component, OnInit } from '@angular/core';
//
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryArray: Array<any>;
  formCategory!: string;
  formStatus: string = 'Add';
  categoryId: string = '';

  constructor(private categoryService: CategoriesService) {
    this.categoryArray = [];
  }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(data => {
      this.categoryArray = data;
    });
  }

  onSubmit(formData: any) {
    const categoryData: Category = formData.form.value;

    if (this.formStatus === 'Add') {
      this.categoryService.saveData(categoryData);
      formData.reset();
    }
    else if (this.formStatus === 'Edit') {
      this.categoryService.updateData(this.categoryId, categoryData);
    }
  }

  onEdit(id: string, category: any) {
    this.categoryId = id;
    this.formCategory = category;
    this.formStatus = 'Edit';
  }
}
