import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Customer } from '../_models/customer';

@Injectable()
export class CustomerService {

    baseURL: string = 'http://127.0.0.1:7101/cci/data/usr/resources/v1/';
    // baseURL: string = 'https://129.144.12.9:7002/ihub/data/usr/resources/v1/';
    // headers = new Headers({ 'Content-Type': 'application/json' });

    // options=new RequestOptions({ headers: this.headers, withCredentials: true })


    constructor(private http: Http) {
    }
    getCustomerDetails() {
        return this.http.get(this.baseURL + 'accounts/20', {withCredentials: true}).map((response: Response) => response.json());
    }

    // getById(id: number) {
    //     return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }

    // create(user: Customer) {
    //     return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    // }

    // update(user: Customer) {
    //     return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    // }

    // delete(id: number) {
    //     return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }

    // private helper methods

    // private jwt() {
    //     // create authorization header with jwt token
    //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     if (currentUser && currentUser.token) {
    //         let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
    //         return new RequestOptions({ headers: headers });
    //     }
    // }

   
}