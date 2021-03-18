import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUpdateService } from '../shared/services/app-update.service';
import { AuthService } from '../user/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  loading = false;
  errMsg = '';
  forgotpassword = false;

  constructor(private formBuilder: FormBuilder,
              private sw: AppUpdateService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {

    // debugger;
    this.signinForm = this.formBuilder.group({
      email: [''],
      password: [''],
      rememberMe: [false]
    });

    this.sw.checkForUpdates();
  }

  submit() {
    // console.log('signin', this.signinForm.value);
    // console.log('username', this.signinForm.value.email);
    // console.log('password', this.signinForm.value.password)
    // try {
      // debugger;
      this.loading = true;
      return this.authService.signIn(this.signinForm.value.email, this.signinForm.value.password)
      .then( res => {
        //**** For futher implementation */
        // if(res.user.emailVerified) {
        //   this.loading = false;
        //   console.log('loggedIn Ok');
        //   this.router.navigateByUrl('home');
        // } else {
        //   this.loading = false;
        //   this.errMsg = 'Your account is not confirmed';
        //   this.router.navigateByUrl('');
        // }
        this.loading = false;
        console.log('loggedIn Ok');
        this.router.navigateByUrl('home');
        
      })
      .catch(
        error => {this.errMsg = 'Incorrect username or passwrod. Please try again.';
                  this.loading = false;
              }// error.message
      );
      // this.router.navigateByUrl('home');
    // } catch(err) {
    //   console.log('error', err);
    // }
  // }

  }
}
