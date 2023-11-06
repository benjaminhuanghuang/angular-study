import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  const spy = jasmine.createSpyObj('ProductService', ['getProducts']);

  beforeEach(async () => {
    /*
      TestBed creates a dummy module that contains the HeaderComponent class
    */
    TestBed.configureTestingModule({
      imports: [

      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        { provider: ProductService, useValue: spy }
      ],
      schemas: []
    }).compileComponents();
  });

  it('use mock ProductService', () => {
    spy.getProducts.and.returnValue(dummyData);
  })
});