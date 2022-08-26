import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct } from './../models/product';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  baseUrl: string = "https://localhost:7002/product/getProduct"

  constructor(private http: HttpClient) { }

  getProduct() : Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl)
  }

  addProduct(product: IProduct): Observable<IProduct> | null {
    return this.http.post<IProduct>(this.baseUrl, product);
  }

  addProducts(product: IProduct[]): Observable<IProduct[]>  {
    return this.http.post<IProduct[]>(this.baseUrl, product);
  }
}




        //[HttpPost("addProduct")]
        //[ProducesResponseType((int)HttpStatusCode.OK)]
        //[ProducesResponseType((int)HttpStatusCode.BadRequest)]
        //public async Task<ActionResult<ProductEntity>> CreateProduct(CreateProductCommandDto command)
        //{
        //    //logging something for this request
        //    logger.LogInformation($"from product {command}");
        //    return await _mediator.Send(new CreateProductCommand
        //    {
        //        Product = command.Product
        //    });server=localhost;Port=5432;Database=ProdDB;UserId=postgres;Password=les//ua//nu//
        //}



        //[HttpPost]
        //[Route("productToBus")]
        //public async Task<IActionResult> ProductToBus([FromBody] CreateProductCommand command)
        //{
        
        //    //before sending the data
        //    //_context.savechangesAsync()
        //    var endpoint = await _sendEndpointProvider.GetSendEndpoint(new Uri("queue" + "productQueue"));

        //    await endpoint.Send<IProductMessage>(new
        //    {
        //        command.ProductDiscount,
        //        command.ProductPrice
        //    });
        //    // _mapper.Map<>()
        //    return Ok("success");
        //    //have some time working 
        //}