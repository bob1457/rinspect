import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) { }

  getAllReports() {
    return this.firestore.collection('report').snapshotChanges();
  }

  getReportDetails(id) {
    return this.firestore.collection('report').doc(id).valueChanges();
  }

  getReportSections(id) {
    return this.firestore.collection('report').doc(id).collection('section').valueChanges();
  }

  getReportSectionByType(id, type) {
    return this.firestore
          .collection('report')
          .doc(id).collection('section', ref => ref.where('type', '==', type))
          .valueChanges();

  }
}
