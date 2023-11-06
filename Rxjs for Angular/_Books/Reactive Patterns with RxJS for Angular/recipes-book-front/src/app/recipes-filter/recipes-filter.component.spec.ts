import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesFilterComponent } from './recipes-filter.component';

describe('RecipesFilterComponent', () => {
  let component: RecipesFilterComponent;
  let fixture: ComponentFixture<RecipesFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesFilterComponent]
    });
    fixture = TestBed.createComponent(RecipesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
