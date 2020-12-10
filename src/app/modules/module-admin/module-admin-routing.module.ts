import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphAdminComponent } from './graph-admin/graph-admin.component';


const routes: Routes = [
  {
    path: '',
    component: GraphAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleAdminRoutingModule { }
