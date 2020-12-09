import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleItRoutingModule } from './module-it-routing.module';
import { GraphItComponent } from './graph-it/graph-it.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [GraphItComponent],
  imports: [
    CommonModule,
    ModuleItRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModuleItModule { }
