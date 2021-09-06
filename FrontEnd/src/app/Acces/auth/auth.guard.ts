import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(): boolean {
  



    if (!this.authService.isLoggedIn) {
      this.router.navigateByUrl('/pages/login');
      return false;
    }else {
      if(localStorage.getItem("id")==='1'){
        if((this.router.url.includes('/app/participant')===true)){
          this.router.navigateByUrl('/pages/404');
        }
      }
      else {
        
        if((this.router.url.substring(0,10)==="/formation")||(this.router.url.substring(0,7)==="/centre")||(this.router.url.substring(0,16)==="/sessionformation")||(this.router.url.substring(0,8)==="/domaine")||(this.router.url.substring(0,11)==="/formateurs")){
          this.router.navigateByUrl('/pages/404');
        }
    }
    return true;
  }
  }

 
}
