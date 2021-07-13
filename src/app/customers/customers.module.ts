import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DataTableModule } from '../common/data-table/data-table.module';

@NgModule({
  declarations: [CustomerListComponent, CustomerDetailComponent],
  imports: [
    CommonModule,
    DataTableModule,
    CustomersRoutingModule
  ],
  providers: []
})
export class CustomersModule { }
