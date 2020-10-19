import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../user/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  restPssordForm: FormGroup;
  fortPasswordMsg = '';
  email = '';

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {

    this.restPssordForm = this.formBuilder.group({
      email: ['']
    })
  }
// 'bob.h.yuan@gmail.com'
  submit(data) { // rest password with email
    debugger;
    
    console.log(data);
    
    this.authService.ForgotPassword(data)
      .then(() => {
        setTimeout(() => {
          this.fortPasswordMsg = 'Please check your email to reset your password';
        }, 3000)
        
      })
      .catch((err) => {
        console.log('err', err);
        this.fortPasswordMsg = 'Error occured, please try again!';
      });
  }

}
