import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/MainComponents/dashboard/dashboard.component';
import { AuthGuard } from './Guards/Auth/auth.guard';
import { LoginComponent } from './Components/Auth/login/login.component';
import { NegAuthGuard } from './Guards/Auth/neg-auth.guard';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';


/*Membership*/
import { AddMembershipComponent } from './Components/Membership/add-membership/add-membership.component';
import { EditMembershipComponent } from './Components/Membership/edit-membership/edit-membership.component';
import { DetailsMembershipComponent } from './Components/Membership/details-membership/details-membership.component';
import { ViewMembershipComponent } from './Components/Membership/view-membership/view-membership.component';

/*Discount*/
import { AddDiscountComponent } from './Components/Discount/add-discount/add-discount.component';
import { EditDiscountComponent } from './Components/Discount/edit-discount/edit-discount.component';
import { DetailsDiscountComponent } from './Components/Discount/details-discount/details-discount.component';
import { ViewDiscountComponent } from './Components/Discount/view-discount/view-discount.component';
/*Member*/
import { AddMemberComponent } from './Components/Member/add-member/add-member.component';
import { EditMemberComponent } from './Components/Member/edit-member/edit-member.component';
import { DetailsMemberComponent } from './Components/Member/details-member/details-member.component';
import { ViewMemberComponent } from './Components/Member/view-member/view-member.component';


/*Sessions*/
import { AddSessionsComponent } from './Components/Sessions/add-sessions/add-sessions.component';
import { EditSessionsComponent } from './Components/Sessions/edit-sessions/edit-sessions.component';
import { DetailsSessionsComponent } from './Components/Sessions/details-sessions/details-sessions.component';
import { ViewSessionsComponent } from './Components/Sessions/view-sessions/view-sessions.component';
const routes: Routes = [

  /*Module Sessions*/
  {
    path: 'view-sessions',
    component: ViewSessionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-sessions',
    component: AddSessionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-sessions/:id',
    component: EditSessionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sessions-details/:id',
    component: DetailsSessionsComponent,
    canActivate: [AuthGuard]
  },




  /*Module Discount*/
  {
    path: 'view-discount',
    component: ViewDiscountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-discount',
    component: AddDiscountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-discount/:id',
    component: EditDiscountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'discount-details/:id',
    component: DetailsDiscountComponent,
    canActivate: [AuthGuard]
  },

  /*Module Member*/
  {
    path: 'view-member',
    component: ViewMemberComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-member',
    component: AddMemberComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-member/:id',
    component: EditMemberComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'member-details/:id',
    component: DetailsMemberComponent,
    canActivate: [AuthGuard]
  },


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
