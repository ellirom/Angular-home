import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

apiUrl = environment.url;

  constructor(
    private http: HttpClient
  ) { }

getTodos(): Observable<Todo[]>{
return this.http.get<Todo[]>(`${this.apiUrl}todos`);
}

getTodoById(id: number): Observable<Todo>{
  return this.http.get<Todo>(`${this.apiUrl}todos/${id}`);
}
}
