import { Injectable } from '@angular/core';
import { Router, CanActivateChild , ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
@Injectable()
export class AuthGuard implements CanActivateChild  {
    
    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivateChild (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true;
        // if (localStorage.getItem('currentUser')) {
        // if (this.authenticationService.isLoggedIn) {
        //     // logged in so return true
        //     return true;
    }

    // // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    // return false;

}