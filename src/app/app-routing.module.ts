import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardContainerComponent} from './components/dashboard-container/dashboard-container.component';

const routes: Routes = [{ path: '', component: DashboardContainerComponent },
 { path: '', redirectTo: '', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
