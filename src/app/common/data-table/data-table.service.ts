import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {
  private dataTableSubject = new BehaviorSubject<Array<any>>(null);

  getTableData(): Observable<Array<any>> {
    return this.dataTableSubject.asObservable();
  }

  setTableData(tableData: Array<any>) {
    this.dataTableSubject.next(tableData);
  }

  constructor() { }
}
