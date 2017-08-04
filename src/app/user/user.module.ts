import { FirebasedbService } from './../services/db/firebasedb.service';
import { BillComponent } from './../billing/bill/bill.component';
import { AuthGuard } from './../guard/auth/auth.guard';
import { AuthService } from './../services/auth/auth.service';
import { MD_PLACEHOLDER_GLOBAL_OPTIONS } from '@angular/material';
import { GoogleMapsModule } from './../google-maps/google-maps.module';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../shared-module/material/material.module';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { MenuEntryCMSComponent } from './admin-view/menu-entry-cms/menu-entry-cms.component';


const routes: Routes = [

      {path: 'user/:id',canActivate:[AuthGuard], component: UserComponent, data: {title: 'User Profile'}},
      {path: 'signup', component: SignupComponent, data: {title: 'Sign Up'}},
      {path: 'login', component: LoginComponent, data: {title: 'Login'}},     

      {path: 'user/:id/dashboard',canActivate:[AuthGuard],component: DashboardComponent, data: {title: 'Dashboard'},
      children:[
        {path: 'billing', component: BillComponent, data: {title: 'Bill'}},
        {path: 'delivery', component: DeliveryComponent, data: {title: 'Delivery'}},
        {path: 'reservations', component: DeliveryComponent, data: {title: 'Reservations'}},
        {path: 'menucms', component: MenuEntryCMSComponent, data: {title: 'Edit Menu Item'}},
      ]},             
     

    ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],

  declarations: [
    UserComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    DeliveryComponent,
    MenuEntryCMSComponent
  ],
  exports: [
    UserComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    DeliveryComponent

  ],
  providers: [
    GoogleMapsAPIWrapper,
    AuthService,
    FirebasedbService,
    {provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'never' }},

  ]

})
export class UserModule { }
