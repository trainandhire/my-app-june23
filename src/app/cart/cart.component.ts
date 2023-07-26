import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  
  public cartCount:number = 0;

  constructor(private commonService:CommonService) {

    commonService.getValue().subscribe(
      (data:any)=>{
        this.cartCount = data;
      }
    )

  }


}
