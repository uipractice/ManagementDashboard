import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Data } from '../../helper/datastore';
import { CookieService } from 'ngx-cookie-service';
// import { first } from 'rxjs/operators';

@Component({
  selector: 'ev-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  //loading = true;
  submitted = false;
  // flagsCheck = false;
  message = '';
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder, public router: Router, public data: Data,
    public auth: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.auth.authenticate().then((res) => {
      res['statusCode'] === 200 ? this.router.navigate['/dashboard'] : '';
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {

    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    let loginData = {
      email: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    this.auth.login(loginData).then((res) => {
      if (res['statusCode'] === 200  ) {
        this.data._accessToken = res['token'];
        localStorage.setItem('userInfo', JSON.stringify(res['data']));
       
        this.router.navigate(['/dashboard']);
      } else {}

    });

    // if (
    //   this.loginForm.controls['username'].value === 'EAdmin' &&
    //   this.loginForm.controls['password'].value === 'E@MDashboard'
    // ) {
    //   this.message = 'login success';
    //   sessionStorage.setItem('user', this.loginForm.controls['username'].value);
    //   this.router.navigate(['/default']);
    // } else {
    //   this.message = 'Username or password is incorrect';
    //   this.loading = false;
    // }
  }

  //  checkLogin(){
  //   this.loading = true;
  //   if (this.loginForm.controls['username'].value ==="EAdmin"
  //   && this.loginForm.controls['password'].value ==="E@MDashboard"){
  //   this.message = 'login success';
  //   sessionStorage.setItem("user", this.loginForm.controls['username'].value);
  //     this.router.navigate(['/default']);
  //   }else{
  //     this.message = 'Username or password is incorrect';
  //     this.loading = false;
  //   }

  // }
}
