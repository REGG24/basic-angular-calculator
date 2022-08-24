import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-calc-button',
  templateUrl: './calc-button.component.html',
  styleUrls: ['./calc-button.component.scss']
})
export class CalcButtonComponent implements OnInit {
  @Input() item = '';
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  press(item: string) {
    this.newItemEvent.emit(item);
  }

  getButtonStyle(item: string) {
    const numberPattern = /[0-9]/g;
    const operandPattern = /\+|\-|\x|\÷/g;

    if(numberPattern.test(item) || item === '.'){
      return 'button normal number';
    }
    if(operandPattern.test(item)) {
      return 'button normal operand';
    }
    if(item === 'AC') {
      return 'button normal ac';
    }  
    return 'button equals';
  }

}
