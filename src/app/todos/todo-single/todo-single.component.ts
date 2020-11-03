import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../todos/todo.model';

@Component({
  selector: 'app-todo-single',
  templateUrl: './todo-single.component.html',
  styleUrls: ['./todo-single.component.scss']
})
export class TodoSingleComponent implements OnInit {
todo: Todo;

  constructor(
    private todoService: TodosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.todoService.getTodoById(id).subscribe((todo) =>{
    this.todo = todo
    });
  }
  backTodo(){
this.router.navigate(['/todo'])
  }
}
