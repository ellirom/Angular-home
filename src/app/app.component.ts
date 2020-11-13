import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  visibility = false;


  constructor ( ) { }

  ngOnInit() {
  }

  showIcon(){
    this.visibility = !this.visibility;
}
}
