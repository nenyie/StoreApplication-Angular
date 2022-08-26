import { IProduct } from './../models/product';
import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  products: IProduct[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(product => this.products = product);
    console.log(this.products);
    
  }

}
