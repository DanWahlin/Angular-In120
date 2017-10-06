import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ICustomer, IOrder, IPagedResults } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/customers.json';
    
    constructor(private http: HttpClient) { }

    getCustomers(page: number, pageSize: number) : Observable<IPagedResults<ICustomer[]>> {
      return this.http.get<ICustomer[]>(this.baseUrl)
                 .map((custs) => {
                    let totalRecords = custs.length;
                    this.calculateTotals(custs);
                    return {
                      totalRecords: totalRecords,
                      results: this.getPage(custs, page, pageSize)
                    }
                 })
                 .catch(this.handleError);
    }

    getCustomer(id: number) : Observable<ICustomer> {
      return this.http.get<ICustomer[]>(this.baseUrl)
                 .map((custs) => {
                    let customer = custs.filter((cust: ICustomer) => cust.id === id);
                    this.calculateTotals(customer);
                    return (customer && customer.length) ? customer[0] : null;
                 })
                 .catch(this.handleError);
    }

    getPage(customers: ICustomer[], start: number, pageSize: number) {
      if (customers) {
        let end = start + pageSize;
        if (end > customers.length) {
          end = customers.length + 1;
        }
        return customers.slice(start, end);
      }
    }

    calculateTotals(customers: ICustomer[]) {
      if (customers) {
        customers.forEach((cust: ICustomer) => {
            if (cust.orders) {
                cust.ordersTotal = 0;
                cust.orders.forEach((order: IOrder) => {
                  cust.ordersTotal += order.itemCost;
                })
            }
        });
      }
    }

    private handleError(error: HttpErrorResponse) {
      console.error('server error:', error); 
      if (error.error instanceof Error) {
        let errMessage = error.error.message;
        return Observable.throw(errMessage);
        // Use the following instead if using lite-server
        //return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Server error');
  }

}