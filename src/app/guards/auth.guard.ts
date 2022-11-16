import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from '../services/auth.service';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private router : Router,
    private authService: AuthService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.isAuthorized){
        this.router.navigate(['login'])
        return false;
      }

      const roles = route.data['roles'] as Role[];
      console.log('roles ***', roles)
      if (roles && !roles.some(r=> this.authService.hasRole(r))){
        this.router.navigate(['not-found'])
        return false
      };

    return true;
  }



  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.isAuthorized){
        return false;
      }

      const roles = route.data && route.data['roles'] as Role[];
      console.log('roles ***', roles)
      if (roles && !roles.some(r=> this.authService.hasRole(r))){
        return false
      };
    return true;
  }
}
