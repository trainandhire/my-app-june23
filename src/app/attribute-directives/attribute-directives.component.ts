import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent{

  public term:string = "";

  public students:any = [
    {name:'ajay', science:90, math:100},
    {name:'sai ram', science:10, math:15},
    {name:'sai mahesh', science:80, math:50},
    {name:'ram raj', science:20, math:20},
    {name:'ram raheem', science:40, math:49},
    {name:'sai priya', science:22, math:49},
  ];

  public today:any = new Date();

  search(){
    this.students = this.students.filter((student:any)=>student.name.includes(this.term));
  }

  add(){
    this.students = this.students.map((student:any)=>{
      student.science = student.science+2;
      return student;
    });
  }

  sort(){
    this.students = this.students.sort((a:any,b:any)=>b.science-a.science);
  }

  total(){
    var total = this.students.reduce((sum:number,a:any)=>sum+a.science,0);
    alert(  total );
  }

  delete(i:any){
    this.students.splice(i,1);
  }

}
