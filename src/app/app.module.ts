import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MiniDashboardComponent } from './mini-dashboard/mini-dashboard.component';
import { MiniDashboardViewerComponent } from './mini-dashboard-viewer/mini-dashboard-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MiniDashboardComponent,
    MiniDashboardViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
