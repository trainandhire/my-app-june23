import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent{

  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl()
  });

  public id:any = "";

  constructor(private vehicleService:VehicleService,private activatedRoute: ActivatedRoute){

    activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;

        vehicleService.getVehicle(this.id).subscribe(
          (data:any)=>{
            this.vehicleForm.patchValue(data);
          }
        )

      }
    )

  }

  submit(){
    console.log( this.vehicleForm.value );
  
    if(this.id?.length>0){

      // update
      this.vehicleService.updateVehicle(this.id, this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("Vehicle updated successfully");
        },
        (err:any)=>{
          alert("Vehicle updattion failed");
        }
      )

    }
    else{
      
      // create
      this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("Vehicle created successfully");
        },
        (err:any)=>{
          alert("Vehicle creation failed");
        }
      )

    }



  }


}
