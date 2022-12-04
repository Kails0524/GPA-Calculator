  // Title: Exercise 7.2 - Reactive Forms
  // Author: Professor Krasso
  // Date: 4 Dec 2022
  // Modified By: Kailee Stephens
  // Description: GPA Calculator App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

  import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const sessionUser = this.cookieService.get('session_user');

    if (sessionUser) {
      return true;
    } else {
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }
}