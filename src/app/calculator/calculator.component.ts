import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  public num1:number = 0;
  public num2:number = 0;
  public result:number = 0;

  add(){
    this.result = this.num1 + this.num2;
  }

}
