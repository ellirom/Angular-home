import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';
import { TodoSingleComponent } from './todo-single/todo-single.component';
import { ButtonModule } from '../shared/component/button/button.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    TodoComponent,
    TodoSingleComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ButtonModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class TodoModule { }
