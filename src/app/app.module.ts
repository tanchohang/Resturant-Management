import { MenuModule } from './menu/menu.module';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationModule } from './notification/notification.module';
import { AuthGuard } from './guard/auth/auth.guard';
import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';



import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { BillingModule } from './billing/billing.module';
import { GoogleMapsModule } from './google-maps/google-maps.module';
import { MaterialModule } from './shared-module/material/material.module';


import { AuthService } from './services/auth.service';



import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { HomeComponent } from './Components/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { QrcodeReaderComponent } from './Components/qrcode-reader/qrcode-reader.component';

const routes:Routes=[
      {path:'',pathMatch:"full",redirectTo:"/home"},
      {path:'home',component:HomeComponent,data:{title:"FoodLand Resturant"}},
      {path:'menu',component:MenuComponent,data:{title:"Menu"}},
      {path:'notification',component:NotificationComponent,data:{title:"Notifications"}},      
      {path:'settings',component:MenuComponent,data:{title:"Settings"}},
      {path:'**', component:NotfoundComponent, data:{title:"404 Error"}}

    ];


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    HomeComponent,
    QrcodeReaderComponent,
    NotfoundComponent    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    UserModule,
    BillingModule,
    GoogleMapsModule,
    HttpModule,
    MaterialModule,
    NotificationModule,
    MenuModule
  ],
  providers: [AngularFireAuth,AuthService,AuthGuard],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
