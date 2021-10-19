import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { CreateNewsNotificationsComponent } from './create-news-notifications/create-news-notifications.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent,  canActivate: [LoginGuard]},
  { path: 'dashboard', component: DashboardContainerComponent, canActivate: [AuthGuard]},
  { path: 'create_news_notification', component: CreateNewsNotificationsComponent, canActivate: [AuthGuard]},
 
  { path: 'hr', loadChildren: () => import('./modules/module-hr/module-hr.module').then(m => m.ModuleHrModule) },
  { path: 'it', loadChildren: () => import('./modules/module-it/module-it.module').then(m => m.ModuleItModule) },
  { path: 'admin', loadChildren: () => import('./modules/module-admin/module-admin.module').then(m => m.ModuleAdminModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
