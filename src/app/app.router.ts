//Router services
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UnknownComponent } from './unknown/unknown.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AccountComponent } from './account/account.component';
import { IntegrationComponent } from './integration/integration.component';
import { IntegrationDetailsComponent } from './integration-details/integration-details.component';
import { ProfileComponent } from './profile/profile.component';
import { RunsComponent } from './runs/runs.component';
import { InboxComponent } from './inbox/inbox.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';

export const router: Routes = [
	{path:'', redirectTo:'inbox', pathMatch:'full'},
	{path:'login', component: LoginComponent},
	{path:'', component: HomeComponent, canActivateChild :[AuthGuard], children:[
		{path:'',  redirectTo:'login', pathMatch:'full'},
		{path:'dashboard', component: DashboardComponent},
		{path:'account', component: AccountComponent},
		{path:'integration', component: IntegrationComponent},
		{path:'integration/:id', component: IntegrationDetailsComponent},
		{path:'run', component: RunsComponent},
		{path:'invoice', component: InvoiceComponent},
		{path:'invoice/:id', component: InvoiceDetailComponent},
		{path:'profile', component: ProfileComponent},
		{path:'inbox', component: InboxComponent},
	]},
	{path:'**', component: UnknownComponent}
]

export const routes:ModuleWithProviders = RouterModule.forRoot(router,{ useHash: true });