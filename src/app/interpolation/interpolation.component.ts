import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  public phone:number = 9494938282;
  public name:string = "John";
  public isIndian:boolean = true;
  
  public prices:number[] = [100,150,120,400];
  public cities:string[] = ['hyd','ban','che']

  public user:any = {
    name: 'abc',
    age:20
  };

  constructor() { }

  ngOnInit(): void {
  }

}
