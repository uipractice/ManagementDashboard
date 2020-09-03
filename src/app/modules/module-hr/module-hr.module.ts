import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleHrRoutingModule } from './module-hr-routing.module';
import { GraphHrComponent } from './graph-hr/graph-hr.component';
import { HeaderHrComponent } from './header-hr/header-hr.component';


@NgModule({
  declarations: [GraphHrComponent, HeaderHrComponent],
  imports: [
    CommonModule,
    ModuleHrRoutingModule
  ]
})
export class ModuleHrModule { }
