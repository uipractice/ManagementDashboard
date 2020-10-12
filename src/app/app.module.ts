import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardSearchComponent } from './components/header/dashboard-search/dashboard-search.component';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { ModuleDefaultRoutingModule } from './modules/module-default/module-default-routing.module';
import { ModuleDefaultModule } from './modules/module-default/module-default.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CharLimitpipe } from './components/pipes/char-limit.pipe';
import { DataGraphComponent } from './reusable/components/data-graph/data-graph.component';
import { DataFilterComponent } from './reusable/components/data-filter/data-filter.component';
import { CssLoaderComponent } from './reusable/components/css-loader/css-loader.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    DashboardContainerComponent,
    DashboardSearchComponent,
    DashboardContainerComponent,
    LoginComponent,
    CharLimitpipe,
    DataGraphComponent,
    DataFilterComponent,
    CssLoaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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
