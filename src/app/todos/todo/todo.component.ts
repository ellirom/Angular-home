import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodosService } from '../todos.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[];
  
  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo(){
this.todosService.getTodos().subscribe((res) =>{
this.todos = res
})
  }
}
