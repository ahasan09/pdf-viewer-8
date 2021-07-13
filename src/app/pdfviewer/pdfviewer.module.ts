import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPdfviewerComponent } from './ngx-pdfviewer/ngx-pdfviewer.component';
import { PdfviewerRouterModule } from './pdfviewer-routing.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
	declarations: [ NgxPdfviewerComponent ],
	imports: [ CommonModule, NgxExtendedPdfViewerModule, PdfviewerRouterModule ],
	exports: [ NgxPdfviewerComponent ]
})
export class PdfviewerModule {}
