import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

subscription: Subscription;

@Input() product: Product;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {

    this.subscription = this.productService.changeView.subscribe((view)=>{
console.log(view)
    })
  }


  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
