import { GraphHrComponent } from './graph-hr/graph-hr.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHrComponent } from './dashboard-hr/dashboard-hr.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardHrComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleHrRoutingModule { }
