import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'product' , loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)
  },
  {
    path: 'product/:id' , loadChildren: () => import('./product-single/product-single.module').then(m => m.ProductSingleModule)
  },
  {
    path: '', redirectTo:'product', pathMatch:'full'
  },
  {
    path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
