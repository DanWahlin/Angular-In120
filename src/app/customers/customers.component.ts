import { Component, OnInit } from '@angular/core';

import { ICustomer, IPagedResults } from '../shared/interfaces';
import { DataService } from '../core/data.service';
import { SorterService } from '../core/sorter.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {

    title: string;
    customers: ICustomer[] = [];
    filteredCustomers: ICustomer[] = [];
    customersOrdersTotal: number;
    pageSize = 5;
    totalRecords: number;

    constructor(private dataservice: DataService, private sorterService: SorterService) { }

    ngOnInit() { 
      this.title = 'Customers';

      this.getCustomersPage(1);
      
      // this.filteredCustomers = this.customers = [
      //     { id: 1, firstName: 'ted', lastName: 'James', city: 'Phoenix', ordersTotal: 9.99, customerSince: new Date(2014, 7, 10) },
      //     { id: 2, firstName: 'Michelle', lastName: 'Thompson', city: 'Los Angeles', ordersTotal: 19.99, customerSince: new Date(2017, 2, 22)},
      //     { id: 3, firstName: 'James', lastName: 'Thomas', city: 'Las Vegas', ordersTotal: 99.99, customerSince: new Date(2002, 10, 31)},
      //     { id: 4, firstName: 'Tina', lastName: 'Adams', city: 'Seattle', ordersTotal: 599.99, customerSince: new Date(2002, 10, 31)},
      // ];
    }

    getCustomersPage(page: number) {
        this.dataservice.getCustomers((page - 1) * this.pageSize, this.pageSize)
            .subscribe((response: IPagedResults<ICustomer[]>) => {
                this.totalRecords = response.totalRecords;
                this.filteredCustomers = this.customers = response.results;
                this.calculateOrders();
            });
    }

    filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
                return cust.firstName.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.lastName.toLowerCase().indexOf(data.toLowerCase()) > -1
            });
            this.calculateOrders();
        } else {
            this.filteredCustomers = this.customers;
        }
    }

    sort(prop: string) {
        this.sorterService.sort(this.filteredCustomers, prop);
    }

    pageChanged(page: number) {
        this.getCustomersPage(page);
    }

    calculateOrders() {
        this.customersOrdersTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
            this.customersOrdersTotal += cust.ordersTotal;
        });
    }

}