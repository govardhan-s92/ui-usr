import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ShareDataService } from '../_services/share-data.service';

@Component({
  selector: 'app-runs',
  templateUrl: './runs.component.html',
  styleUrls: ['./runs.component.scss']
})
export class RunsComponent implements OnInit {
  runs: Array<any> = [];
  pageTitle: string = 'Run';
  query: string = '';

  constructor(title: Title, private shareDataService: ShareDataService) {
    title.setTitle('iHub - ' + this.pageTitle);
    shareDataService.setPageHeader('My ' + this.pageTitle);
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
      },
      {
        "runId": 117,
        "customerId": 1160,
        "customerName": "YUM",
        "integrationId": 660,
        "integrationName": "Benevity To PeopleSoft Deduction Amounts",
        "status": "SUCCESS",
        "messageText": null,
        "startTimeStr": "2017-05-22T20:02:44.000",
        "endTimeStr": "2017-05-22T20:06:04.000",
        "timeTaken": "3m:20s"
      },
      {
        "runId": 116,
        "customerId": 1160,
        "customerName": "YUM",
        "integrationId": 660,
        "integrationName": "Benevity To PeopleSoft Deduction Amounts",
        "status": "SUCCESS",
        "messageText": null,
        "startTimeStr": "2017-05-22T19:33:16.000",
        "endTimeStr": "2017-05-22T19:36:57.000",
        "timeTaken": "3m:41s"
      },
      {
        "runId": 115,
        "customerId": 1160,
        "customerName": "YUM",
        "integrationId": 660,
        "integrationName": "Benevity To PeopleSoft Deduction Amounts",
        "status": "STARTED",
        "messageText": null,
        "startTimeStr": "2017-05-19T19:31:29.000",
        "endTimeStr": "2017-05-19T19:31:29.000",
        "timeTaken": "--:--"
      },
      {
        "runId": 114,
        "customerId": 1160,
        "customerName": "YUM",
        "integrationId": 660,
        "integrationName": "Benevity To PeopleSoft Deduction Amounts",
        "status": "STARTED",
        "messageText": null,
        "startTimeStr": "2017-05-19T19:22:55.000",
        "endTimeStr": "2017-05-19T19:22:55.000",
        "timeTaken": "--:--"
      },
      {
        "runId": 113,
        "customerId": 1160,
        "customerName": "YUM",
        "integrationId": 660,
        "integrationName": "Benevity To PeopleSoft Deduction Amounts",
        "status": "STARTED",
        "messageText": null,
        "startTimeStr": "2017-05-19T19:14:33.000",
        "endTimeStr": "2017-05-19T19:14:33.000",
        "timeTaken": "--:--"
      }
    ];
  }

  ngOnInit() {
  }

}
