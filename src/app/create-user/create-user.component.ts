import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  public userForm:FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      hno: new FormControl(),
      state: new FormControl(),
      pin: new FormControl()
    }),
    type: new FormControl(),
    busFee: new FormControl(),
    hostelFee: new FormControl()
  });

  submit(){
    console.log(this.userForm);
  }

}
