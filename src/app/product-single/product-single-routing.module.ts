import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductSingleComponent } from './product-single/product-single.component';

const routes: Routes = [
{
  path: '', component: ProductSingleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductSingleRoutingModule { }
