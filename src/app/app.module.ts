import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


//Angular Fire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';

//environment.ts
import { environment } from '../environments/environment';


//Custome modules
import { UserModule } from './user/user.module';
import { BillingModule } from './billing/billing.module';
import { GoogleMapsModule } from './google-maps/google-maps.module';
import { MaterialModule } from './shared-module/material/material.module';
import { NotificationModule } from './notification/notification.module';
import { MenuModule } from './menu/menu.module';

//guards
import { AuthGuard } from './guard/auth/auth.guard';

//Custome Component
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { NotificationComponent } from './notification/notification.component';
import { SettingsComponent } from './Components/settings/settings.component';




const routes:Routes=[
      {path:'',pathMatch:"full",redirectTo:"/home"},
      {path:'home',component:HomeComponent,data:{title:"FoodLand Resturant"}},
      {path:'notification',component:NotificationComponent,data:{title:"Notifications"}},      
      {path:'settings',component:SettingsComponent,data:{title:"Settings"}},
      {path:'**', component:NotfoundComponent, data:{title:"404 Error"}}

    ];


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    SettingsComponent,
    
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
    MenuModule,
  ],
  providers: [
    AngularFireAuth,
    AuthGuard,
    
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }