import { AuthService } from './../../services/auth/auth.service';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate,CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild,CanDeactivate<CanComponentDeactivate> {
   constructor(
    private authService:AuthService,
    private router:Router
    ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return this.authService.authUser.map(auth=>{
    //   if(auth==null||auth==undefined){
    //     this.router.navigate(['/login']);
    //     return false;
    //   }        
    //   else{
    //     return true;
    //   }
    // })
      console.log("can activate route")
    return this.authService.getLoggedIn().map(isLoggedin=>{
      if(isLoggedin)
        return true;
      else{
        this.router.navigate(['/login']);
        return false;
      }
      })
    
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log("can avtivate child route")
    return this.authService.getLoggedIn().map(isLoggedin=>{
      if(isLoggedin)
        return true;
      else{
        this.router.navigate(['/login']);
        return false;
      }
      })
  }

  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true

  }
  
}
