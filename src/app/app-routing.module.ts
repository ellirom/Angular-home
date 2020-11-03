import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
path: 'home', component: HomeComponent
  },
  {
path: 'todo' , loadChildren: () => import('./todos/todo.module').then(m => m.TodoModule), data: {preload:true}
  },
  
  {
path: '**', component: NotFoundComponent
   },
  {
path: '', redirectTo: 'home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
