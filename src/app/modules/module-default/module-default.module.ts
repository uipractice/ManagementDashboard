import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleDefaultRoutingModule } from './module-default-routing.module';
import { DashboardGraphComponent } from './dashboard-graph/dashboard-graph.component';


@NgModule({
  declarations: [DashboardGraphComponent],
  imports: [
    CommonModule,
    ModuleDefaultRoutingModule
  ],
  exports: [DashboardGraphComponent]
})
export class ModuleDefaultModule { }
