import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SortPricePipe } from './sort-price.pipe';
import { SearchProductPipe } from './search-product.pipe';
import { SumaPipe } from './suma.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SortPricePipe,
    SearchProductPipe,
    SumaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
