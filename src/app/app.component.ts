import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  condition: boolean = true;
  

  login() {
    this.condition = true
  }

  registration(){
    this.condition = false
  }
}
