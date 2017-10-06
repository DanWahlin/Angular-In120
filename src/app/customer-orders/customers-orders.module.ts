import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerOrdersRoutingModule } from './customer-orders-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ CommonModule, CustomerOrdersRoutingModule, SharedModule ],
    declarations: [ CustomerOrdersRoutingModule.components ],
})
export class CustomerOrdersModule { }