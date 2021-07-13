import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPdfviewerComponent } from './ngx-pdfviewer.component';

describe('NgxPdfviewerComponent', () => {
  let component: NgxPdfviewerComponent;
  let fixture: ComponentFixture<NgxPdfviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPdfviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPdfviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
