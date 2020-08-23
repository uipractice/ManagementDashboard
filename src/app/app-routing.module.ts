import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardLayoutComponent} from './components/dashboard-layout/dashboard-layout.component';
// import {DashboardHeaderComponent} from './components/dashboard-header/dashboard-header.component';
// import {DashboardGraphComponent} from './components/dashboard-graph/dashboard-graph.component';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule) },
{ path: 'dashboard', component: DashboardLayoutComponent },
// { path: 'dashboard-header', component: DashboardHeaderComponent },
// { path: 'dashboard-graph', component: DashboardGraphComponent },
{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
{ path: '**', redirectTo: '/dashboard' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
