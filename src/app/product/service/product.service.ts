import { IProduct } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  baseUrl: string = "https://localhost:70002";

  constructor(private http: HttpClient) { }

  addProduct(product: IProduct): Observable<IProduct> | null | any{
    return this.http.post<IProduct>(this.baseUrl, product);
  }

  addProducts(product: IProduct[]): Observable<IProduct[]>  {
    return this.http.post<IProduct[]>(this.baseUrl, product);
  }
}
