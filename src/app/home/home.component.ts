import { Component, trigger, transition, style, animate } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomMaterialComponent } from './app.material';
import { MdDialog } from '@angular/material';
import { ShareDataService } from '../_services/share-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          animate('300ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('300ms', style({ transform: 'translateX(-100%)', opacity: 0 }))
        ])
      ]
    )
  ],
  providers: [ShareDataService]

})
export class HomeComponent {
  private sidebarToggleVar: boolean = false;
  public getCurrentYear = new Date();
  public pageHeader = this.shareDataService.getPageHeader();
  public showProfile: boolean = false;
  public notifications: any = [];

  public constructor(private shareDataService: ShareDataService) {
    this.notifications = [
      {
        name: 'HCM: Taleo',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, consequatur.'
      },
      {
        name: 'ERP: Supplier',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, consequatur.'
      }
    ];
  }

  private sidebarToggle() {
    this.sidebarToggleVar = !this.sidebarToggleVar;
  }

  ngOnInit() {
  }
}
