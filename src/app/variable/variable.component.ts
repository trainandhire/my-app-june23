import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.scss']
})
export class VariableComponent implements OnInit {

  public age:number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
