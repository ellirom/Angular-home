import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title = 'HomeWork';
numberLesson = 1;

homeworks = [{
  name:"Виконати домашнэ завдання 1 -", 
  status: true
},
{
  name:"Виконати домашнэ завдання 2 -", 
  status: false
},
{
  name:"Виконати домашнэ завдання 3 -", 
  status: true
},
{
  name:"Виконати домашнэ завдання 4 -", 
  status: false
},
{
  name:"Виконати домашнэ завдання 5 -", 
  status: true
}
];


}
