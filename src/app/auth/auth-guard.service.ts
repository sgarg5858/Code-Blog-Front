import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStatusService } from './auth-status.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authStatus:AuthStatusService,private router:Router){}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  :Observable<boolean|UrlTree> | Promise<boolean|UrlTree> | boolean | UrlTree
  {

    console.log("Inside Authguard");

    if(this.authStatus.getUserAuthenticationStatus())
    {
      return true;
    }
    else
    {
      // window.alert('Access Denied, Login is Required to Access This Page!')
      this.router.navigate(['login'])
    }
  }
}
