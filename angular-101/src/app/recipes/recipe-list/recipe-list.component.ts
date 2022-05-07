import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('a', 'aaaaa',"https://cdn.pixabay.com/photo/2022/04/18/02/24/architecture-7139263_960_720.jpg" ),
    new Recipe('a', 'aaaaa',"https://cdn.pixabay.com/photo/2022/04/18/02/24/architecture-7139263_960_720.jpg" )

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
