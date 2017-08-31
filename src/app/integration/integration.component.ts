import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ShareDataService } from '../_services/share-data.service';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent implements OnInit {

   count: number = 0;
  offset: number = 0;
  limit: number = 2;
  loading: boolean = false;
  failed: boolean = false;
onPageChange(offset) {
    this.offset = offset;
    // this._router.navigate(['/page', (offset / this.limit) + 1]);
  }

  public integrations:Array<any> = [];
  private icons:any={};
  private pageTitle:string='Integration';
  query:string='';
  
  constructor(title: Title, private shareDataService: ShareDataService) {
    title.setTitle('iHub - '+this.pageTitle);
    shareDataService.setPageHeader('My '+this.pageTitle);
    this.icons=[
      {color:'#8bc34a',status:'success'},
      {color:'#f44336',status:'error'},
      {color:'#f44336',status:'error'},
      {color:'#ffc107',status:'warning'},
      {color:'#f44336',status:'error'},
      ]
    this.integrations=[
    {
      "integrationId": 41,
      "customerId": 34,
      "integrationName": "HCM: Taleo to HCM Cloud (New Hire)",
      "description": "This integration transfers new hire data from Taleo to HCM Cloud.This integration transfers new hire data from Taleo to HCM Cloud.This integration transfers new hire data from Taleo to HCM Cloud.This integration transfers new hire data from Taleo to HCM Cloud.",
      "logLevel": null,
      "activeFlag": "Y",
      "createdBy": "ihub",
      "createDateStr": "10-Feb-2017 12:00 AM",
      "modifiedBy": "ihub",
      "modifiedDateStr": "11-Feb-2017 12:00 AM",
      "integrationShortCode": "ATG_TALEO_HCM_NEW_HIRE",
      "status": null,
      "runId": null,
      "lastRunDate": null,
      "lastRunStatus": null,
      "sendCompletionEmailTo": "Primary",
      "sendCompletionEmailCc": "Admin",
      "allowCopyFlag": "Y",
      "module": "HCM",
      "functionalEntity": "Core HR",
      "complexity": null,
      "primaryName": null,
      "primaryEmail": null,
      "primaryPhone": null,
      "secondaryName": null,
      "secondaryEmail": null,
      "secondaryPhone": null,
      "intgPrimaryRule": null,
      "intgSecondaryRule": null,
      "customerName": null,
      "integrationSchedule": null,
      "processes": []
    },
    {
      "integrationId": 42,
      "customerId": 34,
      "integrationName": "ERP: Supplier (Addresses)",
      "description": "This Integration is for Supplier addresses master data. The CSV data, in prescribed format, is pushed to the Fusion ERP cloud via FBDI.",
      "logLevel": null,
      "activeFlag": "Y",
      "createdBy": "sgandhi",
      "createDateStr": "10-Feb-2017 12:00 AM",
      "modifiedBy": "ihub",
      "modifiedDateStr": "11-Feb-2017 12:00 AM",
      "integrationShortCode": "SUPPLIER_ADD",
      "status": 'Active',
      "runId": null,
      "lastRunDate": null,
      "lastRunStatus": null,
      "sendCompletionEmailTo": "Primary",
      "sendCompletionEmailCc": "Admin",
      "allowCopyFlag": "Y",
      "module": "ERP",
      "functionalEntity": "Procurement",
      "complexity": null,
      "primaryName": null,
      "primaryEmail": null,
      "primaryPhone": null,
      "secondaryName": null,
      "secondaryEmail": null,
      "secondaryPhone": null,
      "intgPrimaryRule": null,
      "intgSecondaryRule": null,
      "customerName": null,
      "integrationSchedule": null,
      "processes": []
    },
    {
      "integrationId": 141,
      "customerId": 34,
      "integrationName": "ATG1_ERP : AR Invoices",
      "description": "This integration is for AR Invoices. The CSV data is pushed to the Fusion ERP through FBDI.",
      "logLevel": null,
      "activeFlag": "N",
      "createdBy": "ihub",
      "createDateStr": "13-Mar-2017 12:00 AM",
      "modifiedBy": "ihub",
      "modifiedDateStr": "13-Mar-2017 12:00 AM",
      "integrationShortCode": "ATG1_AR_INVOICES",
      "status":  'InActive',
      "runId": null,
      "lastRunDate": null,
      "lastRunStatus": null,
      "sendCompletionEmailTo": "Primary",
      "sendCompletionEmailCc": "Admin",
      "allowCopyFlag": "N",
      "module": "ERP",
      "functionalEntity": "Accounts Receivable",
      "complexity": null,
      "primaryName": null,
      "primaryEmail": null,
      "primaryPhone": null,
      "secondaryName": null,
      "secondaryEmail": null,
      "secondaryPhone": null,
      "intgPrimaryRule": null,
      "intgSecondaryRule": null,
      "customerName": null,
      "integrationSchedule": null,
      "processes": []
    },
    {
      "integrationId": 21,
      "customerId": 34,
      "integrationName": "ERP: GL Daily Rates Integration",
      "description": "This integration loads the daily conversion rates into the General Ledger.",
      "logLevel": null,
      "activeFlag": "Y",
      "createdBy": "sgandhi",
      "createDateStr": "03-Feb-2017 12:00 AM",
      "modifiedBy": "ihub",
      "modifiedDateStr": "12-Apr-2017 7:42 PM",
      "integrationShortCode": "GL_DIALY_RATES",
      "status": null,
      "runId": null,
      "lastRunDate": null,
      "lastRunStatus": null,
      "sendCompletionEmailTo": "Primary",
      "sendCompletionEmailCc": "Admin",
      "allowCopyFlag": "Y",
      "module": "ERP",
      "functionalEntity": null,
      "complexity": null,
      "primaryName": "Sanjeev Chauhan",
      "primaryEmail": "sanjeev.chauhan@cognizant.com",
      "primaryPhone": "(917) 677-7403",
      "secondaryName": "Sid",
      "secondaryEmail": null,
      "secondaryPhone": null,
      "intgPrimaryRule": null,
      "intgSecondaryRule": null,
      "customerName": null,
      "integrationSchedule": null,
      "processes": []
    },
    {
      "integrationId": 81,
      "customerId": 34,
      "integrationName": "ERP: Supplier (Sites)",
      "description": null,
      "logLevel": null,
      "activeFlag": "Y",
      "createdBy": "sgandhi",
      "createDateStr": "24-Feb-2017 12:00 AM",
      "modifiedBy": "sgandhi",
      "modifiedDateStr": "24-Feb-2017 12:00 AM",
      "integrationShortCode": "Supp_Site",
      "status": null,
      "runId": null,
      "lastRunDate": null,
      "lastRunStatus": null,
      "sendCompletionEmailTo": "Primary",
      "sendCompletionEmailCc": "Admin",
      "allowCopyFlag": "Y",
      "module": null,
      "functionalEntity": null,
      "complexity": null,
      "primaryName": null,
      "primaryEmail": null,
      "primaryPhone": null,
      "secondaryName": null,
      "secondaryEmail": null,
      "secondaryPhone": null,
      "intgPrimaryRule": null,
      "intgSecondaryRule": null,
      "customerName": null,
      "integrationSchedule": null,
      "processes": []
    },
    {
      "integrationId": 105,
      "customerId": 34,
      "integrationName": "ERP: Supplier (Contacts)",
      "description": "ERP: Supplier (Contacts)",
      "logLevel": null,
      "activeFlag": "Y",
      "createdBy": "sgandhi",
      "createDateStr": "01-Mar-2017 12:00 AM",
      "modifiedBy": "sgandhi",
      "modifiedDateStr": "01-Mar-2017 12:00 AM",
      "integrationShortCode": "Supp_Contacts",
      "status": null,
      "runId": null,
      "lastRunDate": null,
      "lastRunStatus": null,
      "sendCompletionEmailTo": "Primary",
      "sendCompletionEmailCc": "Admin",
      "allowCopyFlag": "Y",
      "module": null,
      "functionalEntity": null,
      "complexity": null,
      "primaryName": null,
      "primaryEmail": null,
      "primaryPhone": null,
      "secondaryName": null,
      "secondaryEmail": null,
      "secondaryPhone": null,
      "intgPrimaryRule": null,
      "intgSecondaryRule": null,
      "customerName": null,
      "integrationSchedule": null,
      "processes": []
    }];
  }

  ngOnInit() {
  }

}
