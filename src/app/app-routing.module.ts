import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/MainComponents/dashboard/dashboard.component';
import { AuthGuard } from './Guards/Auth/auth.guard';
import { LoginComponent } from './Components/Auth/login/login.component';
import { NegAuthGuard } from './Guards/Auth/neg-auth.guard';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';


  /*Membership*/
  import {AddMembershipComponent } from './Components/Membership/add-membership/add-membership.component';
  import {EditMembershipComponent } from './Components/Membership/edit-membership/edit-membership.component';
  import {DetailsMembershipComponent } from './Components/Membership/details-membership/details-membership.component';
  import {ViewMembershipComponent } from './Components/Membership/view-membership/view-membership.component';
    const routes: Routes = [
    
    /*Module Membership*/
    {
        path: 'view-membership',
        component: ViewMembershipComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'add-membership',
        component: AddMembershipComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'edit-membership/:id',
        component: EditMembershipComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'membership-details/:id',
        component: DetailsMembershipComponent,
        canActivate: [AuthGuard]
    },
    
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
