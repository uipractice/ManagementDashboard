import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const defaultroutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(defaultroutes)],
  exports: [RouterModule]
})
export class ModuleDefaultRoutingModule { }
