import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  // @Input() style = 'default';
  @Input() text = '';
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  buttonClick(){
this.onClick.emit();
  }
}
