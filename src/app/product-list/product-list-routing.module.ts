import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartProductComponent } from './cart-product/cart-product.component';

const routes: Routes = [
  {
    path: '', component: ProductListComponent
  },
  {
    path: 'cart', component: CartProductComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }
