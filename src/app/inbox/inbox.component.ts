import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ShareDataService } from '../_services/share-data.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})

export class InboxComponent implements OnInit {
  messages: any = [];
  labels: any = [];
  allChecked: boolean = false;
  private pageTitle: string = 'Inbox';
  public message_detail_show: boolean = true;
  query:string='';

  constructor(title: Title, private shareDataService: ShareDataService) {
    title.setTitle('iHub - ' + this.pageTitle);
    shareDataService.setPageHeader('My ' + this.pageTitle);
  }

  ngOnInit() {
    this.messages = [{
      from: 'gsrinivas@kbace.com',
      subject: 'Lorem ipsum dolor adeffr serf dsdfgsdf sfdg dfg sdfg sdfg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit voluptas, ut delectus consequatur in voluptatum nulla, ex atque dolore debitis officia ea iste error recusandae nisi magni, dolorum autem soluta illum molestias vel. Possimus dolor sequi est alias ullam ratione fuga officia, magnam error dolorem nam quos adipisci quod recusandae quo quas assumenda illum quae doloribus? Odio voluptate quia, eius maiores sit laborum suscipit vel modi neque dolorem est quas eaque distinctio veniam qui blanditiis, fugit voluptatum tempora, dignissimos sapiente autem adipisci natus alias accusantium iure! Magni nobis, consequatur debitis repellendus voluptates, reprehenderit fugiat ea inventore incidunt alias laborum ipsa.',
      date: '26-Jun-2017',
      category: 'Invoice'
    }, {
      from: 'gsrinivas@kbace.com',
      subject: 'Lorem ipsum dolor adeffr serf d',
      content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor adeffr serf d',
      date: '25-Jun-2017',
      category: 'Green Category'
    }, {
      from: 'gsrinivas@kbace.com',
      subject: 'Lorem ipsum dolor adeffr serf d',
      content: 'Lorem ipsum dolor sit amet',
      date: '23-Jun-2017',
      category: 'Black Category'
    }, {
      from: 'gsrinivas@kbace.com',
      subject: 'Lorem ipsum dolor adeffr serf d',
      content: 'Lorem ipsum dolor sit amet,',
      date: '20-Jun-2017',
      category: 'Invoice'
    }, {
      from: 'gsrinivas@kbace.com',
      subject: 'Lorem ipsum dolor adeffr serf dsdfgsdf sfdg dfg sdfg sdfg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit voluptas, ut delectus consequatur in voluptatum nulla, ex atque dolore debitis officia ea iste error recusandae nisi magni, dolorum autem soluta illum molestias vel. Possimus dolor sequi est alias ullam ratione fuga officia, magnam error dolorem nam quos adipisci quod recusandae quo quas assumenda illum quae doloribus? Odio voluptate quia, eius maiores sit laborum suscipit vel modi neque dolorem est quas eaque distinctio veniam qui blanditiis, fugit voluptatum tempora, dignissimos sapiente autem adipisci natus alias accusantium iure! Magni nobis, consequatur debitis repellendus voluptates, reprehenderit fugiat ea inventore incidunt alias laborum ipsa.',
      date: '28-Jun-2017',
      category: 'Invoice'
    }, {
      from: 'gsrinivas@kbace.com',
      subject: 'Lorem ipsum dolor adeffr serf dsdfgsdf sfdg dfg sdfg sdfg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit voluptas, ut delectus consequatur in voluptatum nulla, ex atque dolore debitis officia ea iste error recusandae nisi magni, dolorum autem soluta illum molestias vel. Possimus dolor sequi est alias ullam ratione fuga officia, magnam error dolorem nam quos adipisci quod recusandae quo quas assumenda illum quae doloribus? Odio voluptate quia, eius maiores sit laborum suscipit vel modi neque dolorem est quas eaque distinctio veniam qui blanditiis, fugit voluptatum tempora, dignissimos sapiente autem adipisci natus alias accusantium iure! Magni nobis, consequatur debitis repellendus voluptates, reprehenderit fugiat ea inventore incidunt alias laborum ipsa.',
      date: '23-Jun-2017',
      category: 'Black Category'
    }];
    this.labels = [{
      color: 'orange',
      text: 'Invoice'
    }, {
      color: 'grey',
      text: 'Grey Category'
    }, {
      color: 'yellow',
      text: 'Yellow Category'
    }, {
      color: 'Black',
      text: 'Black Category'
    }];
  }
  switchTo(args) {
    console.log(args);
  }
  messageOpen(args) {
    this.message_detail_show=false;
  }
  mailResponse(args){
    
  }
}
