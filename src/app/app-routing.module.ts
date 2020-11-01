import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoSingleComponent } from './todo-single/todo-single.component';

const routes: Routes = [
  {
path: 'home', component: HomeComponent
  },
  {
path: 'todo', component: TodoComponent
  },
  {
path: 'todo/:id', component: TodoSingleComponent
  },
  {
path: '**', component: NotFoundComponent
   },
  {
path: '', redirectTo: 'home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
