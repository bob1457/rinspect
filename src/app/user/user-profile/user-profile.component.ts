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
  gravatar = false;

  constructor(private formBuilder: FormBuilder,
              private actRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(params.get('id'));
    })

    this.userForm = this.formBuilder.group({
      userName: [''],
      firstName: [''],
      lastName: [''],
      password: ['']
    });

    // this.userService.getUserProfile(this.id)
    //     .subscribe(user => {
    //       // console.log(user);
    //       this.user = user;
    //       console.log(user);
    //     })
    this.userService.getCurrentUser()
                    .subscribe(user => {
                      this.user = user;
                      console.log('user profile', user);
                      console.log('meta-data', this.user.metadata.creationTime);
                    })
    
  }

  onChange(event) {
    console.log(event);
    this.gravatar = event.value;
    console.log('gravatr', this.gravatar);
  }

  submit() {
    console.log('user form', this.userForm.value);
  }

}
