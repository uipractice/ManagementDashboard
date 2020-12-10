import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAdminRoutingModule } from './module-admin-routing.module';
// import { DashboardGraphComponent } from './dashboard-graph/dashboard-graph.component';
import { GraphAdminComponent } from './graph-admin/graph-admin.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ GraphAdminComponent],
  imports: [
    CommonModule,
    ModuleAdminRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModuleAdminModule { }
