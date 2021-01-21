import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphAdminComponent } from './graph-admin/graph-admin.component';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: GraphAdminComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleAdminRoutingModule { }
