import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError, Subject, ReplaySubject } from 'rxjs';
import { PeriodicElement } from "./model/user.model"
import { JsonPipe } from "@angular/common";

@Injectable({
    providedIn: "root"
})
export class DashService implements CanActivate {

    constructor(private router: Router) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let uname = localStorage.getItem("userM");
        if (localStorage.getItem("userM")) {
            this.router.navigate(['/dashboard'], { queryParams: { returnUrl: state.url } });
            return false;
        }

        return true;
    }


}