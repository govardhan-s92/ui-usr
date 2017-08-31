import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ShareDataService } from '../_services/share-data.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {
  id: number;
  private sub: any;
  public pageTitle: string = 'Invoice Detail';
  integration: any = {};
  constructor(private route: ActivatedRoute, title: Title, public shareDataService: ShareDataService) {
    title.setTitle('iHub - ' + this.pageTitle);
    shareDataService.setPageHeader('My ' + this.pageTitle);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
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
    });
  }

}
