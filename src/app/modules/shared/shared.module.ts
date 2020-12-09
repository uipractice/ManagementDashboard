import { DashboardComponent } from './../../reusable/svg/navigation/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SideNavComponent } from 'src/app/components/side-nav/side-nav.component';
import { CharLimitpipe } from 'src/app/components/pipes/char-limit.pipe';



@NgModule({
  declarations: [HeaderComponent,SideNavComponent, DashboardComponent, CharLimitpipe],
  imports: [
    CommonModule
  ],
  exports:[ HeaderComponent,SideNavComponent,DashboardComponent, CharLimitpipe]
})
export class SharedModule { }
