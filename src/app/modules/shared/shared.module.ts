import { DashboardComponent } from './../../reusable/svg/navigation/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SideNavComponent } from 'src/app/components/side-nav/side-nav.component';
import { CharLimitpipe } from 'src/app/components/pipes/char-limit.pipe';
import { MaterialModule } from './material.module';
import { PlaceHolderComponent } from 'src/app/reusable/components/place-holder/place-holder.component';
import { CssLoaderComponent } from 'src/app/reusable/components/css-loader/css-loader.component';




@NgModule({
  declarations: [HeaderComponent,SideNavComponent, DashboardComponent, 
    CharLimitpipe, PlaceHolderComponent, CssLoaderComponent],
  imports: [
    CommonModule,MaterialModule
  ],
  exports:[ HeaderComponent,SideNavComponent,DashboardComponent, CharLimitpipe, PlaceHolderComponent,
    CssLoaderComponent]
})
export class SharedModule { }
