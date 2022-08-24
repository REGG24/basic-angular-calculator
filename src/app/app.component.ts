import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  expression: string = '0';

  addItem(newItem: string) {
    const numberPattern = /[0-9.]/g;
    
    if((this.expression === '0' || this.expression == 'NaN') && newItem != '=') {
      this.expression = '';
    } else if(this.expression == 'SYNTAX ERROR') {
      this.expression = '';
    } 
    
    if(newItem === 'AC') {
      this.expression = '0';
    } else if(newItem === '='){
      this.processOperation();
    } else {
      if(numberPattern.test(newItem)) {
        this.expression += `${newItem}`;
      }else {
        if(numberPattern.test(this.expression)){
          this.expression += ` ${newItem} `;
        }else{
          this.expression = '0';
        }
      }
    }
  }

  processOperation() {
    const expression = this.expression.trim();
    const elements = expression.split(' ');

    if(elements.length == 1) {
      return;
    }
    if(elements.length == 3) {
      const a = +elements[0];
      const op: string = elements[1];
      const b = +elements[2];

      this.expression = 
        (
          op == '-' ? (a - b) :
          op == '+' ? (a + b) :
          op == '÷' ? (a / b) :
          (a * b)
        ).toString();
    } else {
      this.expression = 'SYNTAX ERROR';
    }
  }
}
