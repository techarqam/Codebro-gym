import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/MainComponents/dashboard/dashboard.component';
import { AuthGuard } from './Guards/Auth/auth.guard';
import { LoginComponent } from './Components/Auth/login/login.component';
import { NegAuthGuard } from './Guards/Auth/neg-auth.guard';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NegAuthGuard]
  },
  {
    path: 'register',
    component: SignUpComponent,
    canActivate: [NegAuthGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
