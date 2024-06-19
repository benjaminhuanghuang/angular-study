import { Injectable } from "@angular/core";
import { Cart, CartLine } from "./cart.model";

@Injectable()
export class Order {
  id?: number;
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  shipped: boolean = false;
  //The # character is the JavaScript feature for identifying private class features and so I have to name the
  //property #cart in order to exclude it from the serialization process.
  #cart: Cart;
  lines: CartLine[];

  constructor(c: Cart) {
    this.#cart = c;
    this.lines = c.lines();
  }

  clear() {
    this.id = undefined;
    this.name = this.address = this.city = undefined;
    this.state = this.zip = this.country = undefined;
    this.shipped = false;
    this.#cart.clear();
  }
}
