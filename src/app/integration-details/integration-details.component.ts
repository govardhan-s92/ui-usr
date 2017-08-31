import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ShareDataService } from '../_services/share-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-integration-details',
  templateUrl: './integration-details.component.html',
  styleUrls: ['./integration-details.component.scss']
})
export class IntegrationDetailsComponent implements OnInit {
  integration: any = {};
  runs: any = [];
  pageTitle: string = 'Integration Details';
  id: number;
  private sub: any;

  constructor(title: Title, public shareDataService: ShareDataService, private route: ActivatedRoute) {
    title.setTitle('iHub - ' + this.pageTitle);
    shareDataService.setPageHeader('My ' + this.pageTitle);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
      this.integration = {
      "integrationId": 41,
      "customerId": 34,
      "integrationName": "HCM: Taleo to HCM Cloud (New Hire)",
      "description": "This integration transfers new hire data from Taleo to HCM Cloud.",
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
    };
    this.runs = [
      {
        "runId": 1023,
        "customerId": 34,
        "customerName": "ATG",
        "integrationId": 3,
        "integrationName": "ERP: Supplier (Header)",
        "status": "STARTED",
        "messageText": null,
        "startTimeStr": "2017-04-13T05:30:57.000",
        "endTimeStr": "2017-04-13T05:30:57.000",
        "timeTaken": "--:--"
      },
      {
        "runId": 1020,
        "customerId": 34,
        "customerName": "ATG",
        "integrationId": 3,
        "integrationName": "ERP: Supplier (Header)",
        "status": "SUCCESS",
        "messageText": null,
        "startTimeStr": "2017-04-10T09:46:51.000",
        "endTimeStr": "2017-04-10T10:11:22.000",
        "timeTaken": "24m:31s"
      },
      {
        "runId": 1006,
        "customerId": 34,
        "customerName": "ATG",
        "integrationId": 3,
        "integrationName": "ERP: Supplier (Header)",
        "status": "STARTED",
        "messageText": null,
        "startTimeStr": "2017-04-06T12:28:29.000",
        "endTimeStr": "2017-04-06T12:28:29.000",
        "timeTaken": "--:--"
      },
      {
        "runId": 1005,
        "customerId": 34,
        "customerName": "ATG",
        "integrationId": 3,
        "integrationName": "ERP: Supplier (Header)",
        "status": "STARTED",
        "messageText": null,
        "startTimeStr": "2017-04-06T12:20:34.000",
        "endTimeStr": "2017-04-06T12:20:34.000",
        "timeTaken": "--:--"
      },
      {
        "runId": 1004,
        "customerId": 34,
        "customerName": "ATG",
        "integrationId": 3,
        "integrationName": "ERP: Supplier (Header)",
        "status": "STARTED",
        "messageText": null,
        "startTimeStr": "2017-04-06T12:14:59.000",
        "endTimeStr": "2017-04-06T12:14:59.000",
        "timeTaken": "--:--"
      }];
  
  }

}
