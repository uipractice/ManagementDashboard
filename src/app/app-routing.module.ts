import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule) },
{ path: 'dashboard', component: LayoutComponent },
{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
{ path: '**', redirectTo: '/dashboard' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
