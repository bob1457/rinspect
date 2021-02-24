import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inspection-other',
  templateUrl: './inspection-other.component.html',
  styleUrls: ['./inspection-other.component.scss']
})
export class InspectionOtherComponent implements OnInit {

  @Input() otherSectionDetails;
  @Input() reportId;
  otherForm: FormGroup;
  sectionId;
  msg = '';

  sectionTitle: string[] = [
    'Walls and Trim', 
    'Cellings',
    'Closets',
    ''
  ];

  codes = [
    { 'name': 'G'},
    { 'name': 'F'},
    { 'name': 'P'},
    { 'name': 'M'},
    { 'name': 'D'},
    { 'name': 'S'},
    { 'name': 'B'},
    { 'name': 'DT'},
    { 'name': 'ST'}
  ]

  constructor(private router: Router,
              private dataService: DataService,
              // private _snackBar: MatSnackBar,
              private notificationService: NotificationService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // console.log('section', this.entrySectionDetails);
    this.otherForm = this.formBuilder.group({
      
      name: [''],
      type: [''],
      // IN
      conditionIn: this.formBuilder.group({
        other1Name: [''],
        other1Code: [''],
        other1Cmnts: [''],
        other2Name: [''],
        other2Code: [''],
        other2Cmnts: [''],
        other3Name: [''],
        other3Code: [''],
        other3Cmnts: [''],
        other4Name: [''],
        other4Code: [''],
        other4Cmnts: ['']
      }),
      //- OUT 

      conditionOut: this.formBuilder.group({
        other1Name: [''],
        other1Code: [''],
        other1Cmnts: [''],
        other2Name: [''],
        other2Code: [''],
        other2Cmnts: [''],
        other3Name: [''],
        other3Code: [''],
        other3Cmnts: [''],
        other4Name: [''],
        other4Code: [''],
        other4Cmnts: ['']
      })

    });

    this.otherSectionDetails.forEach(element => {
        this.otherForm.get('name').setValue(element.payload.doc.data().name);
        // this.otherForm.get('type').disable(element.paayload.doc().data().type);
      // Move In data
      this.otherForm.get('conditionIn').get('other1Name').setValue(element.payload.doc.data().conditionIn.other1Name);      
      this.otherForm.get('conditionIn').get('other1Code').setValue(element.payload.doc.data().conditionIn.other1Code);
      this.otherForm.get('conditionIn').get('other1Cmnts').setValue(element.payload.doc.data().conditionIn.other1Cmnts);
      this.otherForm.get('conditionIn').get('other2Name').setValue(element.payload.doc.data().conditionIn.other2Name);      
      this.otherForm.get('conditionIn').get('other2Code').setValue(element.payload.doc.data().conditionIn.other2Code);
      this.otherForm.get('conditionIn').get('other2Cmnts').setValue(element.payload.doc.data().conditionIn.other2Cmnts);
      this.otherForm.get('conditionIn').get('other3Name').setValue(element.payload.doc.data().conditionIn.other3Name);      
      this.otherForm.get('conditionIn').get('other3Code').setValue(element.payload.doc.data().conditionIn.other3Code);
      this.otherForm.get('conditionIn').get('other3Cmnts').setValue(element.payload.doc.data().conditionIn.other3Cmnts);
      this.otherForm.get('conditionIn').get('other4Name').setValue(element.payload.doc.data().conditionIn.other4Name);      
      this.otherForm.get('conditionIn').get('other4Code').setValue(element.payload.doc.data().conditionIn.other4Code);
      this.otherForm.get('conditionIn').get('other4Cmnts').setValue(element.payload.doc.data().conditionIn.other4Cmnts);
      
      
      
      // Move Out data
      this.otherForm.get('conditionOut').get('other1Name').setValue(element.payload.doc.data().conditionOut.other1Name);
      this.otherForm.get('conditionOut').get('other1Code').setValue(element.payload.doc.data().conditionOut.other1Code);
      this.otherForm.get('conditionOut').get('other1Cmnts').setValue(element.payload.doc.data().conditionOut.other1Cmnts);
      this.otherForm.get('conditionOut').get('other2Name').setValue(element.payload.doc.data().conditionOut.othe21Name);
      this.otherForm.get('conditionOut').get('other2Code').setValue(element.payload.doc.data().conditionOut.other2Code);
      this.otherForm.get('conditionOut').get('other2Cmnts').setValue(element.payload.doc.data().conditionOut.other2Cmnts);
      this.otherForm.get('conditionOut').get('other3Name').setValue(element.payload.doc.data().conditionOut.other3Name);
      this.otherForm.get('conditionOut').get('other3Code').setValue(element.payload.doc.data().conditionOut.other3Code);
      this.otherForm.get('conditionOut').get('other3Cmnts').setValue(element.payload.doc.data().conditionOut.other3Cmnts);
      this.otherForm.get('conditionOut').get('other4Name').setValue(element.payload.doc.data().conditionOut.other4Name);
      this.otherForm.get('conditionOut').get('other4Code').setValue(element.payload.doc.data().conditionOut.other4Code);
      this.otherForm.get('conditionOut').get('other4Cmnts').setValue(element.payload.doc.data().conditionOut.other4Cmnts);

      this.sectionId = element.payload.doc.id;
      console.log('sec id', element.payload.doc.id);
      console.log('sec id to password', element.payload.doc.id);
      console.log('report id', this.reportId);
    });

    
  }

  // Update section
  submit() { 
    this.otherForm.get('type').setValue('Other');
    console.log('sec', this.otherForm.value);
    // this.router.navigate(['/home/addsection']);
    this.dataService.updateSection(this.reportId, this.sectionId, this.otherForm.value)
                    .then(() => {
                      this.msg = 'Section has been updated successfully!';
                      // setTimeout(() => {
                      //   this.msg = '';
                      // }, 3000)
                      // this.openSnackBar(this.msg, 'close', 'snackbar-success');
                      this.notificationService.notification$.next(this.msg);
                    })
                    .catch ((err) => {
                      this.msg = 'Error occured, please try it again!'
                      // this.openSnackBar(this.msg, 'close', 'snackbar-error');
                      this.notificationService.errorNotification$.next(this.msg);
                    });
    // this.reloadComponent();
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/home/addsection']);
  }

}
