import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardHeaderComponent } from './components/dashboard-container/dashboard-header/dashboard-header.component';
import { DashboardSearchComponent } from './components/header/dashboard-search/dashboard-search.component';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { ModuleDefaultRoutingModule } from './modules/module-default/module-default-routing.module';
import { ModuleDefaultModule } from './modules/module-default/module-default.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SideNavComponent,
    DashboardContainerComponent, DashboardHeaderComponent,  DashboardSearchComponent, DashboardContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleDefaultModule,
    ModuleDefaultRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AgGridModule.withComponents(null),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
