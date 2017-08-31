import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { CustomerService } from '../_services/customer.service';
import { ShareDataService } from '../_services/share-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
profile:any={}
    pageTitle='Profile';
  constructor(title: Title, private shareDataService: ShareDataService) {
    title.setTitle('iHub - '+this.pageTitle);
    shareDataService.setPageHeader('My '+this.pageTitle);
  }

  ngOnInit() {
  }

}
