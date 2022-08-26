import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './component/product.component';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './store/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product.effects';
import { ProductService } from './service/product.service';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(fromProduct.productsFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductEffects])
  ],

  exports: [
    ProductComponent
  ],

  providers: [ProductService]
})
export class ProductModule { }



