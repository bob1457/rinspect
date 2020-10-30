import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "../user/services/auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // debugger;
    if (this.authService.isLoggedIn !== true) {
      console.log('isLogIn', this.authService.isLoggedIn);
    //   window.alert('Access Denied, Login is Required to Access This Page!')
      this.router.navigate(['/']);
    }
    return true;
  }

}
