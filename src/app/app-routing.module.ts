import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './authguard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardContainerComponent},
 
  // { path: 'dashboard', loadChildren: () => import('./modules/module-default/module-default.module').then(m => m.ModuleDefaultModule) },
  { path: 'hr', loadChildren: () => import('./modules/module-hr/module-hr.module').then(m => m.ModuleHrModule) },
  { path: 'it', loadChildren: () => import('./modules/module-it/module-it.module').then(m => m.ModuleItModule) },
  { path: 'admin', loadChildren: () => import('./modules/module-admin/module-admin.module').then(m => m.ModuleAdminModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
