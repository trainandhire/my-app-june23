import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products:any = [];

  constructor(private productsService: ProductsService) {

    this.productsService.getProducts().subscribe(
      (data:any)=>{
        this.products = data;
      }
    )

   }

  ngOnInit(): void {
  }

}
