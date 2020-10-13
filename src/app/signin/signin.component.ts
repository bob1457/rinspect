import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../user/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {

    this.signinForm = this.formBuilder.group({
      email: [''],
      password: [''],
      rememberMe: [false]
    });
  }

  submit() {
    // console.log('signin', this.signinForm.value);
    // console.log('username', this.signinForm.value.email);
    // console.log('password', this.signinForm.value.password)
    try {
      // debugger;
      this.authService.signIn(this.signinForm.value.email, this.signinForm.value.password);
      this.router.navigateByUrl('home');
    } catch(err) {
      console.log('error', err);
    }
    
  }

}
