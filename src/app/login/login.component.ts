import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from '../_services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShareDataService } from '../_services/share-data.service';
import { UserData } from '../_models/user.data';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[UserData]
})

export class LoginComponent implements OnInit {
  register = function () {

  }

  model: any = {};
  loading = false;
  //  profile:any={"firstName":"","lastName":"","mail":""}

  constructor(
    title: Title,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastrService: ToastrService,
    private shareDataService: ShareDataService,
  ) {
    title.setTitle('Login');
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout().subscribe(
      data => {
        if (data.status == 'SUCCESS') {
          this.toastrService.success('', 'Logout Success!');
          this.router.navigate(['/login']);
        }
      },
      error => {
        if (error.status != 0) {
          this.toastrService.error(error, 'Error');
        }
      });
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
        if (data.status == "SUCCESS") {
          this.router.navigate(['/dashboard']);
          this.toastrService.success('', 'Login Success!');
          this.shareDataService.setLoginData({ 'customerId': data.customerId, 'userMail': this.model.username })
          // this.shareDataService.setProfile({"firstName":data.firstName,"lastName":data.lastName,"mail":this.model.username});
        }
      },
      error => {
        this.toastrService.error(error, 'Error');
        this.loading = false;
      });
  }
}

