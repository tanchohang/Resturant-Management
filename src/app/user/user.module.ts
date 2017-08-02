import { GoogleMapsModule } from './../google-maps/google-maps.module';
import { AuthGuard } from '../guard/auth/auth.guard';
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


const routes:Routes=[
      {path:'user/:id',component:UserComponent,canActivate:[AuthGuard],data:{title:"User Profile"},
      children:[
        {path:'dashboard',component:DashboardComponent, data:{title:"Dashboard"}},
        {path:'dashboard/delivery',component:DeliveryComponent,data:{title:"Delivery"}},
        {path:'dashboard/reservations',component:DeliveryComponent,data:{title:"Reservations"}},      
        {path:'dashboard/menucms',component:MenuEntryCMSComponent,data:{title:"Edit Menu Item"}},
      
      ]
    
    },
      {path:'signup',component:SignupComponent,data:{title:"Sign Up"}},
      {path:'login',component:LoginComponent,data:{title:"Login"}},
      
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
  exports:[
    UserComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    DeliveryComponent
       
  ],
  providers:[GoogleMapsAPIWrapper]

})
export class UserModule { }
