import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';

@Component({
  selector: 'ev-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    // flagsCheck = false;
    message = '';
    currentUser =  localStorage.getItem("user");
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        //private authenticationService: AuthenticationService
    ) {
        // redirect to home if already logged in
        if (this.currentUser) {
            this.router.navigate(['/default']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
         //this.returnUrl = this.route.snapshot.queryParams['/default'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit(){
      this.submitted = true;
      if (this.loginForm.invalid){
        return;
      }

    }


     checkLogin(){
      this.loading = true;
      if (this.loginForm.controls['username'].value ==="EAdmin"
      && this.loginForm.controls['password'].value ==="E@MDashboard"){
      this.message = 'login success';
      localStorage.setItem("user", this.loginForm.controls['username'].value);
        this.router.navigate(['/default']);
      }else{
        this.message = 'Username or password is incorrect';
        this.loading = false;
      }

    }


}
