import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 
  } 

products = [{
  id: 1,
  name: ' Austin-Healey',
  price: 300
},
{
  id: 2,
  name: ' Lamborghini',
  price: 800
},
{
  id: 3,
  name: ' Bugatti',
  price: 200
}
]

productModel = {
  name: '',
  price: ''
};

search = '';

order = false;

changeOrder(){
this.order = !this.order;
}

addProduct(){
const lastId = this.products[this.products.length-1].id + 1;
this.products.push({id: lastId, name: this.productModel.name, price: +this.productModel.price});
};

deleteProduct(id){
this.products.splice(id, 1); 
};

total: number;

getSuma(){
let sum = 0;
this.products.forEach(el => {
sum += el.price
});
this.total = sum;
  
  }

}