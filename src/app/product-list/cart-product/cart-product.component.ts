import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {

  private cartItems;
  private totalAmmount;

  constructor(
   private cartService: CartServiceService,
  ) { }

  ngOnInit() {
    this.cartService.getProducts().subscribe(data => {
      this.cartItems = data;

      this.totalAmmount = this.cartService.getTotalPrice();
    });
  }

  removeItemFromCart(productId) {
    /* this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    this.mySharedService.setProducts(this.cartItems); */

    this.cartService.removeProductFromCart(productId);

  }

  emptyCart() {
    this.cartService.emptryCart();
  }

}
