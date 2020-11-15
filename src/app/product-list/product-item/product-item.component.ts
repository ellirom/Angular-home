import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

@Input() product: Product;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.changeView.subscribe((view)=>{
console.log(view)
    })
  }

}
