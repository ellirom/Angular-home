import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public cartItems:Product[] = [];
  
  public products = new Subject();
  constructor(
   
  ) { }
  
  
  getProducts(): Observable<any> {
    console.log('this.cartItems :', this.cartItems);
    return this.products.asObservable();
  }
  
  setProducts(products) {
    this.cartItems.push(...products);
    this.products.next(products);
  }

  addProductToCart(product) {
    this.cartItems.push(product);
    this.products.next(this.cartItems);
  }

  removeProductFromCart(productId) {
    this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    this.products.next(this.cartItems);
  }

  // Remove all the items added to the cart
  emptryCart() {
    this.cartItems.length = 0;
    this.products.next(this.cartItems);
  }

  // Calculate total price on item added to the cart
  getTotalPrice() {
    let total = 0;

    this.cartItems.map(item => {
      total += item.price;
    });

    return total
  }



  // addToCart(product) {
  //   this.items.push(product);
  // }

  // getItems() {
  //   return this.items;
  // }

  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }



}
