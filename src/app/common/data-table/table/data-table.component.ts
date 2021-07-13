import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Column } from '../data-table';
import { DataTableService } from '../data-table.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnDestroy {
  @Input() columns: Column[];
  @Input() pager: any = {};
  @Output() setPage = new EventEmitter<number>();

  displayedColumns: Array<any>;
  dataSource: Array<any> = [];
  private subscription: Subject<any>;

  constructor(private dataTableService: DataTableService) {
    this.subscription = new Subject<any>();
  }

  ngOnInit() {
    this.displayedColumns = this.columns.map(column => column.key);
    this.dataTableService.getTableData()
      .pipe(takeUntil(this.subscription))
      .subscribe((response: Array<any>) => {
        this.dataSource = response;
      });
  }

  selectPage(page: number) {
    this.setPage.emit(page);
  }

  ngOnDestroy(): void {
    this.subscription.complete();
    this.subscription.unsubscribe();
  }

}
