import { Component } from '@angular/core';
import { Task } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title = 'HomeWork';
numberLesson = 2 ;

homeworks: Task [];
ngOnInit() {
this.homeworks = [{
  id: 0,
  name:"Виконати домашнэ завдання 1 -", 
  status: true
},
{ 
  id: 1,
  name:"Виконати домашнэ завдання 2 -", 
  status: false
},
{
  id: 2,
  name:"Виконати домашнэ завдання 3 -", 
  status: true
},
{
  id: 3,
  name:"Виконати домашнэ завдання 4 -", 
  status: false
},
{
  id: 4,
  name:"Виконати домашнэ завдання 5 -", 
  status: true
},
{
  id: 5,
  name:"Виконати домашнэ завдання 6 -", 
  status: false
},
{
  id: 6,
  name:"Виконати домашнэ завдання 7 -", 
  status: true
}
];


}}
