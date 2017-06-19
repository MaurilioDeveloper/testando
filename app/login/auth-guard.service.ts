import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    let isCheck = false;
    if (this.checkLogin(url)) {
      isCheck = this.isPermission(url);
    }
    return isCheck;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
   // console.log("checkLogin Start", url, this.authService.isLoggedIn);
   
    if (this.authService.isLoggedIn()) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

  /*  // Create a dummy session id
    let sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };*/

    // Navigate to the login page with extras
   // this.router.navigate(['/login'], navigationExtras);
    this.router.navigate(['/login']);
  //  console.log("checkLogin end", url);
    return false;
  }

  isPermission(url: string) {
    let user = this.authService.appService.getSessionUser();
   
    
    let isCkeck = false;
    if (user) {  
      user.authorities.forEach(auth => {
       // console.log("Rota banco: ",auth.url, "Rota Fluxo: ",url,auth.route );
        if (auth.url === url && auth.route) {
           console.log("auth ok");
          isCkeck = true;
          return;
        }
      });
     
      if(!isCkeck){
       // console.log("auth nook");
        this.router.navigate(['/denied']);
        isCkeck = false;
      }
    }
    return isCkeck;
  }

 
}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/