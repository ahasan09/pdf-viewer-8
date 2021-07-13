import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './table/data-table.component';
import { MaterialModule } from '../../shared/material-module';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [DataTableComponent, PaginationComponent],
  exports: [DataTableComponent, PaginationComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class DataTableModule { }
