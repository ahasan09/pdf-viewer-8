import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from './customer';
import { CUSTOMERS } from './mock-customers';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS);
  }

  getCustomer(id: number | string) {
    return this.getCustomers().pipe(
      map((customers: Customer[]) => customers.find(customer => customer.id === +id))
    );
  }

  getCustomerColumns() {
    return [
      { key: 'id', value: 'ID' },
      { key: 'name', value: 'NAME' },
      { key: 'phone', value: 'PHONE' },
      { key: 'email', value: 'EMAIL' },
      { key: 'country', value: 'COUNTRY' },
      { key: 'nationality', value: 'NATIONALITY' },
      { key: 'address', value: 'ADDRESS' }
    ];
  }
}
