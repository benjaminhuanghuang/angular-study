import { Component } from '@angular/core';
//
import { RecipesService } from '../core/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  recipes$ = this.service.recipes$;

  constructor(private service: RecipesService) { }

  ngOnInit(): void {
  }
}
