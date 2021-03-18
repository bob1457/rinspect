import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(public afAuth: AngularFireAuth,
              public  router:  Router) {
                this.afAuth.authState.subscribe(user => {
                  if (user){
                    this.user = user;
                    console.log('user info', this.user);
                    localStorage.setItem('user', JSON.stringify(this.user));
                  } else {
                    localStorage.setItem('user', null);
                  }
                });

              }

  async signIn(email: string, password: string) {
    // debugger;
    var result = await this.afAuth.signInWithEmailAndPassword(email, password);
    console.log('login email verified', result.user.emailVerified);
    // if(result.user.emailVerified) {
    //   this.router.navigate(['home']);
    // } else {
    //   alert('Your account is not confirmed');
    // }
    return result
    
  }

  ForgotPassword(email:string) {
    debugger;
    return this.afAuth.sendPasswordResetEmail(email, {url: 'http://localhost:4200/auth'});
  }

  ChangePassword(password) {
    debugger;
    return this.afAuth.currentUser;
  }

  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  async ResetPassword(password: any) {
    return (await this.afAuth.currentUser).updatePassword(password);
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    // const user = JSON.parse(localStorage.getItem('user'));
    // return (user !== null) ? true : false;
    return this.user != null;
  }

}
