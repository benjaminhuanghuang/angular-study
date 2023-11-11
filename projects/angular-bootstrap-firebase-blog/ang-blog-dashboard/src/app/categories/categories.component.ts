import { Component } from '@angular/core';
//
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private categoryService: CategoriesService) { }

  onSubmit(formData: any) {
    const categoryData: Category = formData.form.value;

    this.categoryService.saveData(categoryData);
  }
}
