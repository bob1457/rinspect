import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userForm: FormGroup;
  user;
  id;

  constructor(private formBuilder: FormBuilder,
              private actRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {

    

    this.userForm = this.formBuilder.group({
      userName: [''],
      firstName: [''],
      lastName: [''],
      password: ['']
    });

    this.userService.getUserProfile()
        .subscribe(user => {
          console.log(user);
          this.user = user;
          
        })
  }

  submit() {
    console.log('user form', this.userForm.value);
  }

}
