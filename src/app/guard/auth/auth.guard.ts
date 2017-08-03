import { AuthService } from './../../services/auth/auth.service';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

  
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

    return this.authService.getLoggedIn().map(isLoggedin=>{
      if(isLoggedin)
        return true;
      else{
        this.router.navigate(['/login']);
        return false;
      }
      })
    
  }
}
