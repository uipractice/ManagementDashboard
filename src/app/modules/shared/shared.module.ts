import { DashboardComponent } from './../../reusable/svg/navigation/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SideNavComponent } from 'src/app/components/side-nav/side-nav.component';
import { CharLimitpipe } from 'src/app/components/pipes/char-limit.pipe';
import { MaterialModule } from './material.module';
import { PlaceHolderComponent } from 'src/app/reusable/components/place-holder/place-holder.component';




@NgModule({
  declarations: [HeaderComponent,SideNavComponent, DashboardComponent, 
    CharLimitpipe, PlaceHolderComponent],
  imports: [
    CommonModule,MaterialModule
  ],
  exports:[ HeaderComponent,SideNavComponent,DashboardComponent, CharLimitpipe, PlaceHolderComponent]
})
export class SharedModule { }
