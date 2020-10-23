import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { report } from 'process';
import { UserService } from 'src/app/user/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userId;
  user;

  constructor(private firestore: AngularFirestore,
              private userService: UserService) { }

  getAllReports() {
    // debugger;
    this.userService.getCurrentUser()
        .subscribe(res => {
          if(res) {
            this.userId = res.uid;
          }          
        });
    // this.user = localStorage.getItem('user');
        console.log('uid in report service',this.user);
    // 'TrLS9eN8HnKQbhbcqiOU''0yQDaxLXNxXNEKXyUTpqBLBZcrw2'
    return this.firestore.collection('report', ref => ref.where('reportOwnerId', '==', this.userId))
    .snapshotChanges();
  }

  getReportDetails(id) {
    return this.firestore.collection('report').doc(id).valueChanges();
  }

  getReportSections(id) {
    return this.firestore.collection('report').doc(id).collection('section').snapshotChanges();
  }

  getReportSectionByType(id, type) {
    return this.firestore
          .collection('report')
          .doc(id).collection('section', ref => ref.where('type', '==', type))
          .snapshotChanges();

  }

  createReport(report: any) {
    return this.firestore.collection('report').add(report);
  }

  createSection(rptSction: any, id: any) {
    debugger;
    return this.firestore.collection('report').doc(id).collection('section').add(rptSction);
  }

  updateReport(report: any) {
    debugger;
    return this.firestore.collection('report').doc(report.id).update(report);
  }

  updateSection(rptId: any, secId: any, section: any) {
    // debugger;
    var toBeUpdated = this.firestore.collection('report').doc(rptId).collection('section').doc(secId);
    console.log('update targeet',toBeUpdated);

    return toBeUpdated.update(section);
  }
}
