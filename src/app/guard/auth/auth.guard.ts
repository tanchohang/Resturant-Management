import { AuthService } from '../../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log(this.authService.getIsLoggedIn());      
      if(this.authService.getIsLoggedIn())
        return true ;
    
      this.router.navigate(['/login']);
      return false;
      
    }
}
