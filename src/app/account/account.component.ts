import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomerService } from '../_services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { ShareDataService } from '../_services/share-data.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [DatePipe]
})
export class AccountComponent implements OnInit {
  customer: any = {};
   private pageTitle: string= 'Company Profile';
  constructor(
    title: Title,
    private customerService: CustomerService,
    private toastrService: ToastrService,
    public datepipe: DatePipe, private shareDataService: ShareDataService) {
    title.setTitle('iHub - '+this.pageTitle);
    shareDataService.setPageHeader('My '+this.pageTitle);
  }

  ngOnInit() {
    this.customerService.getCustomerDetails()
      .subscribe(data => {
        this.toastrService.success('Success', 'Customer Details fetched!');
        this.customer = data; //For time being hardcoded
        //parsing the date from string to date format
        this.customer.contractStartStr = this.datepipe.transform(new Date(this.customer.contractStartStr), 'yyyy-MM-dd');
        this.customer.contractEndStr = this.datepipe.transform(new Date(this.customer.contractEndStr), 'yyyy-MM-dd');
      }, error => {
        this.toastrService.error('Error', 'Couldn\'t fetch Customer Details');
      });

  }




}

