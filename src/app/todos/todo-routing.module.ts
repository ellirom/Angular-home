import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoSingleComponent } from './todo-single/todo-single.component';

const routes: Routes = [
  {
path: '', component: TodoComponent
  },
  {
path: ':id', component: TodoSingleComponent
  }]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
