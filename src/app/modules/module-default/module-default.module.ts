import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleDefaultRoutingModule } from './module-default-routing.module';
import { GraphDefaultComponent } from './graph-default/graph-default.component';
import { HeaderDefaultComponent } from './header-default/header-default.component';


@NgModule({
  declarations: [GraphDefaultComponent, HeaderDefaultComponent],
  imports: [
    CommonModule,
    ModuleDefaultRoutingModule
  ],
  exports: [GraphDefaultComponent, HeaderDefaultComponent]
})
export class ModuleDefaultModule { }
