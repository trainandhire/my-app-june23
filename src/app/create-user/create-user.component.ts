import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  public userForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    age: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    phone: new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      hno: new FormControl(),
      state: new FormControl('',[Validators.required, Validators.minLength(3)]),
      pin: new FormControl()
    }),
    type: new FormControl(),
    busFee: new FormControl(),
    hostelFee: new FormControl(),
    cards: new FormArray([])
  });

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        no: new FormControl('',[Validators.required]),
        exp: new FormControl(),
        cvv: new FormControl()
      })
    )
  }

  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);
  }

  submit(){
    console.log(this.userForm);
  }

}
