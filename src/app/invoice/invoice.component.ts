import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ShareDataService } from '../_services/share-data.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
  viewProviders: [Title]
})
export class InvoiceComponent implements OnInit {
  invoices: Array<any> = [];
  billingScheduleOption: string = 'week';
  billingSchedule = [{ value: 'week', viewValue: 'Week' }, { value: 'fortnight', viewValue: 'Fortnight' }, { value: 'month', viewValue: 'Month' }];
  pageTitle: string = 'Invoice';
  query:string='';
  public chart1_ChartData = [
    ['Integrations', 'HCM', 'ERP', 'Int-1', 'Int-2',
      'Int-3', 'Int-4', { role: 'annotation' }],
    ['Mar 2017', 10, 24, 20, 32, 18, 5, ''],
    ['Apr 2017', 16, 22, 23, 30, 16, 9, ''],
    ['May 2017', 28, 19, 29, 30, 12, 13, '']
  ]
  public chart1_ChartOptions = {
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '75%' },
    isStacked: true,
  }
  public chart2_ChartData = [
    ['Genre', 'Price($)', { role: 'annotation' }],
    ['Mar 2017', 8010, ''],
    ['Apr 2017', 11006, ''],
    ['May 2017', 25008, '']
  ]
  public chart2_ChartOptions = {
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '75%' },
    // isStacked: true,
  }
  constructor(title: Title, private shareDataService: ShareDataService) {
    title.setTitle('iHub - ' + this.pageTitle);
    shareDataService.setPageHeader('My ' + this.pageTitle);
    this.invoices = [{
      id:1,
      invoiceName: "Invoice_May_2017_week_1",
      description: "This integration transfers new hire data from Taleo to HCM Cloud.",
      lastRun: "2017-05-05",
      price: "$598.00"
    },
    {
      id:2,
      invoiceName: "Invoice_May_2017_week_2",
      description: "This Integration is for Supplier addresses master data. The CSV data, in prescribed format, is pushed to the Fusion ERP cloud via FBDI.",
      lastRun: "2017-05-12",
      price: "$1229.00"
    }, {
      id:3,
      invoiceName: "Invoice_May_2017_week_3",
      description: "This integration loads the daily conversion rates into the General Ledger.",
      lastRun: "2017-05-19",
      price: "$1208.00"
    }, {
      id:4,
      invoiceName: "Invoice_May_2017_week_4",
      description: "This integration transfers new hire data from Taleo to HCM Cloud.",
      lastRun: "2017-05-26",
      price: "$598.00"
    }]
  }

  ngOnInit() {

  }

}
