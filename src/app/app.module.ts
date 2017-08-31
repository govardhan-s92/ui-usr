import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import {GoogleChart} from 'angular2-google-chart/directives/angular2-google-chart.directive';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './app.router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Observable } from "rxjs/Rx";
import 'hammerjs';

import { AppComponent } from './app.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { UnknownComponent } from './unknown/unknown.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { IntegrationComponent } from './integration/integration.component';
import { IntegrationDetailsComponent } from './integration-details/integration-details.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { RunsComponent } from './runs/runs.component';
import { InboxComponent } from './inbox/inbox.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { TruncatePipe } from './_pipes/truncate.pipe';
import { SearchPipe } from './_pipes/search.pipe';

import { AuthenticationService } from './_services/authentication.service';
import { CustomerService } from './_services/customer.service';
import { ShareDataService } from './_services/share-data.service';
import { PaginationComponent } from './_services/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UnknownComponent,
    HomeComponent,
    DashboardComponent,
    // CalendarComponent,
    // GoogleChart,
    InvoiceComponent,
    IntegrationComponent,
    AccountComponent,
    IntegrationDetailsComponent,
    ProfileComponent,
    RunsComponent,
    InboxComponent,
    InvoiceDetailComponent,
    TruncatePipe,
    SearchPipe,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    BrowserAnimationsModule,
    MaterialModule, MdNativeDateModule,
    ToastrModule.forRoot({ closeButton: true, progressBar: true })
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    CustomerService,
    ToastrService,
    ShareDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
