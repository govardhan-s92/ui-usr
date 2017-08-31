import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Location } from '@angular/common';
@Injectable()
export class ShareDataService {
    private login = new BehaviorSubject<any>({ 'customerId': '', 'userMail': '' });
    private pageHeader = new BehaviorSubject<string>('');
   location: Location;

  constructor(location: Location) { this.location = location; }
    public setLoginData(args) {
        this.login.next(args);
    }
    public getLoginData() {
        return this.login.asObservable();
    }
    public setPageHeader(args: string) {
        this.pageHeader.next(args);
    }
    public getPageHeader() {
        return this.pageHeader.asObservable();
    }
    public back(){
        this.location.back();
    }
}
