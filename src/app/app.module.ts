import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardSearchComponent } from './components/header/dashboard-search/dashboard-search.component';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { ModuleDefaultRoutingModule } from './modules/module-default/module-default-routing.module';
import { ModuleDefaultModule } from './modules/module-default/module-default.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CharLimitpipe } from './components/pipes/char-limit.pipe';
import { DataGraphComponent } from './reusable/components/data-graph/data-graph.component';
import { DataFilterComponent } from './reusable/components/data-filter/data-filter.component';
import { CssLoaderComponent } from './reusable/components/css-loader/css-loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WebReqInterceptor } from '../services/web-req.interceptor';
import { Data } from './helper/datastore';
import { PlaceHolderComponent } from './reusable/components/place-holder/place-holder.component';
import { DashboardComponent } from './reusable/svg/navigation/dashboard/dashboard.component';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from './modules/shared/material.module';
import { DataModalComponent } from './reusable/components/data-modal/data-modal.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // SideNavComponent,
    DashboardContainerComponent,
    DashboardSearchComponent,
    DashboardContainerComponent,
    LoginComponent,
    // CharLimitpipe,
    DataGraphComponent,
    DataFilterComponent,
    CssLoaderComponent,
    // PlaceHolderComponent,
    DataModalComponent
    // DashboardComponent,
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
    // MatMenuModule,
    // MatIconModule,
    MaterialModule,
    AutoCompleteModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true },
    Data,
    CookieService,
    { provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
