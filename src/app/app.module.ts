import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material-module';
import { ToolBarComponent } from './common/tool-bar/tool-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { PagerService } from './shared/index';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
