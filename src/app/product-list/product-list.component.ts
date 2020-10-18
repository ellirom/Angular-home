import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isGrid: boolean = false;
list() {
  this.isGrid=false;
}
  
 grid(){
   this.isGrid=true;
}

products = [{
id: 1,
image: 'https://picsum.photos/200/200?random=1',
name: 'Product 1',
description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste',
price: '12.00 USD',

},
{
  id: 2,
  image: 'https://picsum.photos/200/200?random=2',
  name: 'Product 2',
  description: 'Illo eligendi possimus fugit laudantium',
  price: '20.00 USD',
  
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/200?random=3',
    name: 'Product 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit',
    price: '100.00 USD',
    
    },
    {
      id: 4,
      image: 'https://picsum.photos/200/200?random=4',
      name: 'Product 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste',
      price: '5.00 USD',
      
      },
];


productCart = [];

  constructor() { }

  ngOnInit(){
  }

  addProduct(event){
console.log(event);

this.productCart.push(event);
  }

  deleteProduct(i){
    this.productCart.splice(i, 1);
  }
}
