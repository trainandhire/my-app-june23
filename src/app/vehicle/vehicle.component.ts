import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent{

  public vehicles:any = [];
  public term:string = "";

  public column:string = "";
  public order:string = "";

  constructor(private vehicleService: VehicleService, private router: Router) { 

    this.vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    ) 

  }
  getFilteredVehicles(){
    this.vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    ) 
  }

  getSortedVehicles(){
    this.vehicleService.getSortedVehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    ) 
  }

  deleteVehicle(id:any){
    this.vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error");
      }
    ) 
  }

  view(id:number){
    this.router.navigateByUrl('/dashboard/vehicle-details/'+id);
  }

  edit(id:number){
    this.router.navigateByUrl('/dashboard/edit-vehicle/'+id);
  }


}
