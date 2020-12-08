import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphItComponent } from './graph-it/graph-it.component';


const routes: Routes = [
  {
    path: '',
    component: GraphItComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleItRoutingModule { }
