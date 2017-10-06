export interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    city: string;
    ordersTotal?: number;
    customerSince: Date;
    orders: IOrder[];
}

export interface IOrder {
    id: number;
    productName: string;
    itemCost: number;
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}