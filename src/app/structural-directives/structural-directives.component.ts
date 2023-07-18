import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent{

  public names:string[] = ['Ajay', 'Bharath', 'virat'];
  public states:string[] = ['Telangana', 'Andhra', 'Karnataka', 'kerala'];

  public products:any = [
    {name:'pen',price:20},
    {name:'mobile',price:13000},
    {name:'watch',price:5000}
  ];

  public num:number = 0;

  


}
