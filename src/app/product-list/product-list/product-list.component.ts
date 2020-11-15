import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product, Availability } from 'src/app/shared/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  availabilities = [
{ availability: true, name:'In-stock'

},
{
  availability: '',  name:'All products'
}
  ];
  availabilityProduct = false;



  page = 1;

products: Product[];
search = '';
loader = false;
view = 'list';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
   
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    const params = this.route.snapshot.queryParams;
    if (params.hasOwnProperty('search')){
    this.search = params.search;
    }
    // let filter = {availability: true};
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
      this.router.navigate(['/product'], {queryParams:{sortBy:name, order: direction },
    queryParamsHandling: ''})
    })
  }

  searchProduct(){
    console.log(this.search)
 this.loader = false;
    this.productService.getProducts({search: this.search }).subscribe((products) =>{
      this.products = products;
      this.loader = true;
      this.router.navigate(['/product'], {queryParams:{search: this.search },
      queryParamsHandling: ''})
    })
  }

  changeAvailability(){
    console.log('change availability', this.availabilityProduct);
    this.loader = false;
    this.productService.getProducts({availability: this.availabilityProduct }).subscribe((products) =>{
      this.products = products;
      this.loader = true;
      this.router.navigate(['/product'], {queryParams:{availability: this.availabilityProduct  },
      queryParamsHandling: 'merge'})
    })
   
  }

  clearFilter(){
    const params = {...this.route.snapshot.queryParams};
    console.log(params);
    delete params.availability;
    this.loader = false;
    this.productService.getProducts(params).subscribe((products) =>{
      
      this.loader = true;
      this.products = products;
      this.availabilityProduct = false;
      this.router.navigate(['/product'], {queryParams:params,
      queryParamsHandling: ''})
    })
   

  }

  changeView(view){
    this.view = view;
this.productService.changeView.next(view)
  }


  onScroll(){
console.log('scroll');
this.page++
const params = {...this.route.snapshot.queryParams};
params.page = this.page;
this.productService.getProducts(params).subscribe((products) =>{
  this.products = this.products.concat(products);
})


  }
  
}
