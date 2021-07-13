import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'customers', loadChildren: () => import('./customers/customers.module').then((m) => m.CustomersModule) },
	{ path: 'pdfviewer', loadChildren: () => import('./pdfviewer/pdfviewer.module').then((m) => m.PdfviewerModule) },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
