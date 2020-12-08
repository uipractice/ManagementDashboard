import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAdminRoutingModule } from './module-admin-routing.module';
// import { DashboardGraphComponent } from './dashboard-graph/dashboard-graph.component';
import { GraphAdminComponent } from './graph-admin/graph-admin.component';


@NgModule({
  declarations: [ GraphAdminComponent],
  imports: [
    CommonModule,
    ModuleAdminRoutingModule
  ]
})
export class ModuleAdminModule { }
