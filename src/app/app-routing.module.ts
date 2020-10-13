import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './authguard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'default', component: DashboardContainerComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
