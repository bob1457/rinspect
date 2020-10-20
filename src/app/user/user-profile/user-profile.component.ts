import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { firestore } from 'firebase';
import * as firebase from 'firebase';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userForm: FormGroup;
  user;
  id;
  avatar = 'custom';
  newpassword = '';
  oldpassword = '';
  confirmpassword = '';
  msg = '';

  constructor(private formBuilder: FormBuilder,
              private actRoute: ActivatedRoute,
              private authService: AuthService,
              private userService: UserService) { }

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(params.get('id'));
    })

    this.userForm = this.formBuilder.group({ 
      email: [''],
      firstName: [''],
      lastName: [''],
      password: ['']
    });

    // this.userForm.get('firstName').setValue(this.user.firstName);
    // this.userForm.get('lastName').setValue(this.user.lastName);
    // this.userForm.get('email').setValue(this.user.email);

    // this.userService.getUserProfile(this.id)
    //     .subscribe(user => {
    //       // console.log(user);
    //       this.user = user;
    //       console.log(user);
    //     })
    
    this.userService.getCurrentUser()
                    .subscribe(user => {
                      if(user){
                        this.user = user;

                        this.userForm.get('firstName').setValue(this.user.displayName.split(' ').slice(0, -1));
                        this.userForm.get('lastName').setValue(this.user.displayName.split(' ').slice(-1));
                        this.userForm.get('email').setValue(this.user.email);

                        console.log('user profile', user);
                        console.log('uid', user.uid);
                        console.log('meta-data', this.user.metadata.creationTime);
                      }                      
                    })
    
  }

  onChange(event) {
    console.log(event);
    this.avatar = event.value;
    console.log('gravatr', this.avatar);
  }

  changePassword(newPassword) {
    debugger;
    console.log('new pass', newPassword);

    if (this.newpassword != this.confirmpassword) { 
      // alert('New Password and Confirm Password do not match'); 
      this.msg = 'New Password and Confirm Password do not match';
      return; 
    } 

    return this.userService.getCurrentUser()
                    .subscribe((user) => {
                      
                      var credetial = firebase.auth.EmailAuthProvider
                                              .credential(user.email, this.oldpassword);
                      user.reauthenticateWithCredential(credetial)
                          .then(() => {
                            user.updatePassword(newPassword);
                            this.msg = 'Password has been changed successfully!'
                            setTimeout(() => {
                              this.msg = '';
                            }, 3000)
                          })
                          .catch((err) => {
                            this.msg = 'Incorrect username or passwrod. Please try again.'
                          })
                      
                    });
  }

  submit() {
    console.log('user form', this.userForm.value);
    this.user.updateProfile({
      displayName: this.userForm.value.firstName + " " + this.userForm.value.lastName
    })
  }

}
