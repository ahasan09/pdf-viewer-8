import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Column } from '../../common/data-table/data-table';
import { DataTableService } from '../../common/data-table/data-table.service';
import { PagerService } from '../../shared/index';
import { PI,AHService } from '@ahconfig';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
	pi: number = PI;
  
  columns: Column[];
  allItems: Array<any>;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(
    private service: CustomerService,
    private dataTableService: DataTableService,
    private pagerService: PagerService,
    private _AHService:AHService
  ) {
  }

  ngOnInit() {
    this.columns = this.service.getCustomerColumns();
    // get dummy data
    this.service.getCustomers()
      .subscribe(data => {
        // set items to json response
        this.allItems = data;

        // initialize to page 1
        this.setPage(1);
      });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.dataTableService.setTableData(this.pagedItems);
  }

}
