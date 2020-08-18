import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {

    this.signinForm = this.formBuilder.group({
      email: [''],
      password: [''],
      rememberMe: [false]
    });
  }

  submit() {
    console.log('signin', this.signinForm.value);
    this.router.navigateByUrl('home');
  }

}
