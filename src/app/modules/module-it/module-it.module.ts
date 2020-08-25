import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleItRoutingModule } from './module-it-routing.module';
import { GraphItComponent } from './graph-it/graph-it.component';


@NgModule({
  declarations: [GraphItComponent],
  imports: [
    CommonModule,
    ModuleItRoutingModule
  ]
})
export class ModuleItModule { }
