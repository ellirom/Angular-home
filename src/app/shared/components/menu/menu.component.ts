import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private cartProductCount: number = 0;
openMenu = false;

  constructor(
    private cartService: CartServiceService,
    private productService: ProductService
  ) { }

  ngOnInit() {

    this.cartService.getProducts().subscribe(data => {
      this.cartProductCount = data.length;
    })
  }

  
  showMenu(){
this.openMenu = !this.openMenu;
  }
}
