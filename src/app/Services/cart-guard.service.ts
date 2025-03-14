import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CartGuardService implements CanActivate {

  constructor(private authService:AuthService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.isAuthenticated()){
      return true;
    } else{
      this.router.navigate(['']);
      return false;
    }
  }
}
