import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AfterLoggedInGuard implements CanActivate {
  constructor(
    private authService:AuthService
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.authService.getIsLoggedIn()){
        console.log(this.authService.isLoggedIn)
        return true;
      }
      else{
        console.log(this.authService.isLoggedIn)
        
        return false;
  }}
}
