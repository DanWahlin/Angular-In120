import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

    @Input() customers: ICustomer[];
    @Input() ordersTotal: number;
    @Output() sorted = new EventEmitter();
    currencyCode: string = 'USD';

    ngOnInit() { 

    }

    sort(prop: string) {
        this.sorted.emit(prop);
    }

    customerTrackBy(index: number, customer: ICustomer) {
        return customer.id;
    }

}