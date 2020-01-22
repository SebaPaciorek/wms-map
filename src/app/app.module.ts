import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularOpenlayersModule } from "ngx-openlayers";
import { WmsMapComponent } from './wms-map/wms-map.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    WmsMapComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularOpenlayersModule,
    RouterModule.forRoot([
      // { path: '', component: AppComponent },
      // { path: 'products/:productId', component: ProductDetailsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
