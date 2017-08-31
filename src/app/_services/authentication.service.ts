import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 

@Injectable()
export class AuthenticationService {

    data:string='';
    headers:Headers=new Headers();
    baseURL:string='http://127.0.0.1:7101/cci/data/usr/resources/';
    public isLoggedIn:boolean=false;
    constructor(private http: Http){
    this.headers.append("Content-Type", "application/x-www-form-urlencoded");
    }
     

    login(username: string, password: string) {
    this.headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    return this.http.post(this.baseURL + 'auth/v1/login',this.data, {headers: this.headers})
        .map((response: Response) => {
           
            if (response.json()[0].status=='SUCCESS') {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // localStorage.setItem('currentUser', username);
                this.isLoggedIn = true;
            }
            return response.json()[0];
        });
    }
 
    logout() {
            return this.http.get(this.baseURL + 'auth/logout', {headers: this.headers})
            .map((response: Response) => {
            // remove user from local storage to log user out
            // localStorage.removeItem('currentUser');
              this.isLoggedIn = false;
                return response.json();
        });
    }
}