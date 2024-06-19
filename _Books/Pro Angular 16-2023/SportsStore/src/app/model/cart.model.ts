import { Injectable, Signal, WritableSignal, computed, signal } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
  private linesSignal: WritableSignal<CartLine[]>;
  public summary: Signal<CartSummary>;

  constructor() {
    this.linesSignal = signal([]);

    this.summary = computed(() => {
      let newSummary = new CartSummary();
      this.linesSignal().forEach(l => {
        newSummary.itemCount += l.quantity;
        newSummary.cartPrice += l.lineTotal;
      });
      return newSummary;
    })
  }

  get lines(): Signal<CartLine[]> {
    return this.linesSignal.asReadonly();
  }

  addLine(product: Product, quantity: number = 1) {
    this.linesSignal.update(linesArray => {
      const newArray = [...linesArray];
      const line = newArray.find(l => l.product.id === product.id);
      if (line !== undefined) {
        line.quantity += quantity;
      } else {
        newArray.push(new CartLine(product, quantity));
      }
      return newArray;
    });
  }

  updateQuantity(product: Product, quantity: number) {
    this.linesSignal.update(linesArray => {
      const newArray = [...linesArray];
      const line = newArray.find(l => l.product.id === product.id);
      if (line !== undefined) {
        line.quantity += quantity;
      } else {
        newArray.push(new CartLine(product, quantity));
      }
      return newArray;
    });
  }

  removeLine(id: number) {
    this.linesSignal.update(linesArray => {
      return linesArray.filter(l => l.product.id !== id);
    });
  }

  clear() {
    this.linesSignal.set([]);
  }
}

export class CartLine {

  constructor(public product: Product,
    public quantity: number) { }

  get lineTotal() {
    return this.quantity * (this.product.price ?? 0);
  }
}

export class CartSummary {
  itemCount: number = 0;
  cartPrice: number = 0;
}
