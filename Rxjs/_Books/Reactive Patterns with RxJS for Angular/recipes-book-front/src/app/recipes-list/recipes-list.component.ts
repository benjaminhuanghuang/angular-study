import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, map } from 'rxjs';

//
import { RecipesService } from '../core/services/recipes.service';
import { Recipe } from '../core/model/recipe.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListComponent {
  recipes$ = this.service.recipes$;
  filterRecipesAction$ = this.service.filterRecipesAction$;

  filtredRecipes$ = combineLatest([this.recipes$, this.filterRecipesAction$]).pipe(
    map(([recipes, filter]: [Recipe[], Recipe]) => {
      return recipes.filter(recipe => recipe.title?.toLowerCase()
        .indexOf(filter?.title?.toLowerCase() ?? '') != -1)
    })
  );

  constructor(private service: RecipesService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
}
