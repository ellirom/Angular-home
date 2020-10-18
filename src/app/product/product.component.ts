import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productItem;

  
  @Output() addToCart = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    console.log(this.productItem)
  }
  addCart(id, name) {
    console.log(`${name} add to cart`, id );
    this.addToCart.emit(id);
  }
  
 
}
