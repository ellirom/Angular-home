import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSingleRoutingModule } from './product-single-routing.module';
import { ProductSingleComponent } from './product-single/product-single.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ProductSingleComponent],
  imports: [
    CommonModule,
    ProductSingleRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class ProductSingleModule { }
