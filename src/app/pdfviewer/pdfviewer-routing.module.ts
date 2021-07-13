import { NgModule } from '@angular/core';
import { NgxPdfviewerComponent } from './ngx-pdfviewer/ngx-pdfviewer.component';
import { RouterModule, Routes } from '@angular/router';

const pdfViewerRoutes: Routes = [ { path: '', component: NgxPdfviewerComponent } ];

@NgModule({
	imports: [ RouterModule.forChild(pdfViewerRoutes) ],
	exports: [ RouterModule ]
})
export class PdfviewerRouterModule {}
