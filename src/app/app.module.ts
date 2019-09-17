import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { firebaseConfig } from './firebaseConfig';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './Components/MainComponents/dashboard/dashboard.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { AuthGuard } from './Guards/Auth/auth.guard';
import { NegAuthGuard } from './Guards/Auth/neg-auth.guard';
import { AuthService } from './Services/Auth/auth.service';
import { MainHeaderComponent } from './Components/Extras/Headers/main-header/main-header.component';
import { LoaderComponent } from './Components/Extras/Loaders/loader/loader.component';
import { ModelsService } from './Models/models';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import * as firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

import { AddMembershipComponent } from './Components/Membership/add-membership/add-membership.component';
import { EditMembershipComponent } from './Components/Membership/edit-membership/edit-membership.component';
import { DetailsMembershipComponent } from './Components/Membership/details-membership/details-membership.component';
import { ViewMembershipComponent } from './Components/Membership/view-membership/view-membership.component';

import { AddDiscountComponent } from './Components/Discount/add-discount/add-discount.component';
import { EditDiscountComponent } from './Components/Discount/edit-discount/edit-discount.component';
import { DetailsDiscountComponent } from './Components/Discount/details-discount/details-discount.component';
import { ViewDiscountComponent } from './Components/Discount/view-discount/view-discount.component';
import { AddMemberComponent } from './Components/Member/add-member/add-member.component';
import { EditMemberComponent } from './Components/Member/edit-member/edit-member.component';
import { DetailsMemberComponent } from './Components/Member/details-member/details-member.component';
import { ViewMemberComponent } from './Components/Member/view-member/view-member.component';


import {AddSessionsComponent } from './Components/Sessions/add-sessions/add-sessions.component';
import {EditSessionsComponent } from './Components/Sessions/edit-sessions/edit-sessions.component';
import {DetailsSessionsComponent } from './Components/Sessions/details-sessions/details-sessions.component';
import {ViewSessionsComponent } from './Components/Sessions/view-sessions/view-sessions.component';

  @NgModule({
  



  declarations: [
    AppComponent,
    /*Sessions*/
    AddSessionsComponent,
    EditSessionsComponent,
    DetailsSessionsComponent,
    ViewSessionsComponent,
    

    /*Discount*/
    AddDiscountComponent,
    EditDiscountComponent,
    DetailsDiscountComponent,
    ViewDiscountComponent,

    /*Member*/
    AddMemberComponent,
    EditMemberComponent,
    DetailsMemberComponent,
    ViewMemberComponent,

    /*Membership*/
    AddMembershipComponent,
    EditMembershipComponent,
    DetailsMembershipComponent,
    ViewMembershipComponent,

    DashboardComponent,
    LoginComponent,
    MainHeaderComponent,
    LoaderComponent,
    SignUpComponent,
  ],
  entryComponents: [
    MainHeaderComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    FormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthGuard,
    NegAuthGuard,
    ModelsService,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
