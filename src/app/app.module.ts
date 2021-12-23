import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { DashboardSearchComponent } from './components/header/dashboard-search/dashboard-search.component';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { ModuleDefaultRoutingModule } from './modules/module-default/module-default-routing.module';
import { ModuleDefaultModule } from './modules/module-default/module-default.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataGraphComponent } from './reusable/components/data-graph/data-graph.component';
import { DataFilterComponent } from './reusable/components/data-filter/data-filter.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WebReqInterceptor } from '../services/web-req.interceptor';
import { Data } from './helper/datastore';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/shared/material.module';
import { DataModalComponent } from './reusable/components/data-modal/data-modal.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { CreateNewsNotificationsComponent } from './create-news-notifications/create-news-notifications.component';
import { NewsNotificationModalComponent } from './reusable/components/news-notification-modal/news-notification-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardContainerComponent,
    DashboardSearchComponent,
    DashboardContainerComponent,
    LoginComponent,
    DataGraphComponent,
    DataFilterComponent,
    DataModalComponent,
    CreateNewsNotificationsComponent,
    NewsNotificationModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    ModuleDefaultModule,
    ModuleDefaultRoutingModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MaterialModule,
    AutoCompleteModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true },
    Data,
    CookieService,
    AuthGuard,
    LoginGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
