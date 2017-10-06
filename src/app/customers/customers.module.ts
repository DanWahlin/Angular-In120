import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
    imports: [ CommonModule, SharedModule, CustomersRoutingModule ],
    declarations: [ CustomersRoutingModule.components ]
})
export class CustomersModule { }