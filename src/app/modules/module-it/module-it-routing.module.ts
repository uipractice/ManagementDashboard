import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphItComponent } from './graph-it/graph-it.component';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: GraphItComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleItRoutingModule { }
