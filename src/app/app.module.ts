import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { AppComponent }  from './app.component';
import { CustomerOrdersModule } from './customer-orders/customers-orders.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    CoreModule, 
    CustomersModule, 
    CustomerOrdersModule, 
    AppRoutingModule 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }