import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleHrRoutingModule } from './module-hr-routing.module';
import { GraphHrComponent } from './graph-hr/graph-hr.component';
import { HeaderHrComponent } from './header-hr/header-hr.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [GraphHrComponent, HeaderHrComponent],
  imports: [
    CommonModule,
    ModuleHrRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModuleHrModule { }
