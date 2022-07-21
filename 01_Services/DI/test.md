Within Angular’s DI system, instead of directly importing and creating a new instance
of a class, instead we will:
- Register the “dependency” with Angular
- Describe how the dependency will be injected
- Inject the dependency


## Product class using PriceService
import { PriceService } from './price.service';

export class Product {
  service: PriceService;   
  basePrice: number;

  constructor(basePrice: number) {
    this.service = new PriceService(); // <-- create directly ("hardcoded")
    this.basePrice = basePrice;
  }

  totalPrice(state: string) {
    return this.service.calculateTotalPrice(this.basePrice, state);
  }
}

## Mock service for testing
```
import { IPriceService } from './price-service.interface';

export class MockPriceService implements IPriceService {
  calculateTotalPrice(basePrice: number, state: string) {
    if (state === 'FL') {
    return basePrice + 0.66; // it's always 66 cents!
    }

    return basePrice;
  }
}
```


interface for IPriceService
```
export interface IPriceService {
  calculateTotalPrice(basePrice: number, state: string): number;
}
```

## Test
import { Product } from './product';

describe('Product', () => {

  let product;

  beforeEach(() => {
    const service = new MockPriceService(); // <-- Use the mock service
    product = new Product(service, 11.00);
  });

  // How to test the funciton using a service
  describe('price', () => {
    it('is calculated based on the basePrice and the state', () => {
    expect(product.totalPrice('FL')).toBe(11.66); // <-- hmmm
  });
  })
});




