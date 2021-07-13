import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() pager: any = {};
  @Output() setPage = new EventEmitter<number>();

  selectPage(page: number) {
    this.setPage.emit(page);
  }

}
