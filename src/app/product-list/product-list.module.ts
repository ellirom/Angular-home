import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import {MatCardModule} from '@angular/material/card';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [ProductListComponent, ProductItemComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    MatCardModule
  ]
})
export class ProductListModule { }
