import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { emailVerified } from '@angular/fire/auth-guard';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authState: any = null;
  registerForm: FormGroup;

  constructor(private firestore: AngularFirestore,
              private formBuilder: FormBuilder,
              public afAuth: AngularFireAuth) { 
                this.afAuth.authState.subscribe((auth) => {
                  this.authState = auth;
                  console.log('auth state',this.authState);
                })
              }

  ngOnInit(): void {
    
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
    })
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  // User Profile
  getCurrentUser() {
    return this.afAuth.authState;
  }

  // getUserProfile(id) {    
  //   // return this.firestore.collection("user").doc(id).valueChanges();
  //   return this.firestore.collection("user").doc(id).valueChanges();

    
  // }
  registerUser(email, password, firstName, lastName) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
               .then ((res) => {
                  // this.afAuth.user.subscribe( x => {
                  //   if(x) {
                  //     x.sendEmailVerification()
                  //     .then(()=> {
                        
                  //     })
                  //   }f
                  // })


                 res.user.email = email;
                 res.user.displayName = firstName + ' ' + lastName;
                 res.user.photoURL = '';
                 res.user.sendEmailVerification();
                 console.log('register Ok: Verification email sent to: '+ email);
               }).catch((err) => {
                 console.log('register failed' + err.message)
               })
  }

  // async sendEmailVerification() {
  //   await (await this.afAuth.currentUser).sendEmailVerification().then(() => {
  //     console.log('Email verification sent to: ' + this.afAuth.currentUser.then((user) => user.email))
  //   })    
  // }
} 
