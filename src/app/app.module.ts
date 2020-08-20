import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './components/common/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from './components/common/side-nav/side-nav.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardGraphComponent } from './components/dashboard-graph/dashboard-graph.component';
import { DashboardSearchComponent } from './components/dashboard-search/dashboard-search.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, SideNavComponent,
     DashboardLayoutComponent, DashboardHeaderComponent, DashboardGraphComponent, DashboardSearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AgGridModule.withComponents(null),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
