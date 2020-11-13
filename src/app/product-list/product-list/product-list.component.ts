import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

products: Product[];
loader = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
   
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    const params = this.route.snapshot.queryParams;
    this.productService.getProducts(params).subscribe((products) =>{
      console.log(products);
    
      this.products = products;
      this.loader = true;
    })
  }
  sortProduct(name, direction) {
    this.loader = false;
    this.productService.getProducts({sortBy:name, order: direction}).subscribe((products) =>{
      this.products = products;
      this.loader = true;
      this.router.navigate(['/product'], {queryParams:{sortBy:name, order: direction }})
    })
  }
}
