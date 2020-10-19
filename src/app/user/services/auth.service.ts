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
                })

              }
  
  async signIn(email: string, password: string) {
    // debugger;
    var result = await this.afAuth.signInWithEmailAndPassword(email, password);
    console.log('login result', result);
    this.router.navigate(['home']);
  }

  ForgotPassword(email:string) {
    debugger;
    return this.afAuth.sendPasswordResetEmail(email, {url: 'http://localhost:4200/auth'});
  }

  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);  
  }

  async ResetPassword(password: any) {
    return (await this.afAuth.currentUser).updatePassword(password);
  }

  
}
