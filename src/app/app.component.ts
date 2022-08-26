import { IProduct } from './product/models/product';
import { Component } from '@angular/core';
import { ProductService } from './product/service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 
  constructor() { }

  ngOnInit(): void {
 
  } 

 
}
