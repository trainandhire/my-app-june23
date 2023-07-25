import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products:Product[] = [];

  constructor(private productsService: ProductsService) {

    this.productsService.getProducts().subscribe(
      (data:Product[])=>{
        this.products = data;
      }
    )

   }

  ngOnInit(): void {
  }

}
