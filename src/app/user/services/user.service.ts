import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  getUserProfile(id) {
    // return this.firestore.collection("user").doc(id).valueChanges();
    return this.firestore.collection("user").doc(id).valueChanges();
  }
}
