import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authState: any = null;

  constructor(private firestore: AngularFirestore,
              public afAuth: AngularFireAuth) { 
                this.afAuth.authState.subscribe((auth) => {
                  this.authState = auth;
                  console.log('auth state',this.authState);
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
} 
