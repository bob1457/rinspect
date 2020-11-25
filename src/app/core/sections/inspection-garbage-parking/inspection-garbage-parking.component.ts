import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inspection-garbage-parking',
  templateUrl: './inspection-garbage-parking.component.html',
  styleUrls: ['./inspection-garbage-parking.component.scss']
})
export class InspectionGarbageParkingComponent implements OnInit {

  @Input() garbageParkingSectionDetails;
  @Input() reportId;
  garbageParkingForm: FormGroup;
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
    this.garbageParkingForm = this.formBuilder.group({
      
      name: [''],
      type: [''],
      // IN
      conditionIn: this.formBuilder.group({
        electricCmnts: [''],
        electricCode: [''], 
        otherCode: [''],
        otherCmnts: ['']
      }),
      //- OUT 

      conditionOut: this.formBuilder.group({
        electricCmnts: [''],
        electricCode: [''], 
        otherCode: [''],
        otherCmnts: ['']
      })

    });

    this.garbageParkingSectionDetails.forEach(element => {
        this.garbageParkingForm.get('name').setValue(element.payload.doc.data().name);
        // this.garbageParkingForm.get('type').disable(element.paayload.doc().data().type);
      // Move In data      
      this.garbageParkingForm.get('conditionIn').get('electricCmnts').setValue(element.payload.doc.data().conditionIn.electricCmnts);
      this.garbageParkingForm.get('conditionIn').get('electricCode').setValue(element.payload.doc.data().conditionIn.electricCode);
      this.garbageParkingForm.get('conditionIn').get('otherCode').setValue(element.payload.doc.data().conditionIn.otherCode);
      this.garbageParkingForm.get('conditionIn').get('otherCmnts').setValue(element.payload.doc.data().conditionIn.otherCmnts);

      
      
      
      // Move Out data      
      this.garbageParkingForm.get('conditionOut').get('otherCode').setValue(element.payload.doc.data().conditionOut.otherCode);
      this.garbageParkingForm.get('conditionOut').get('otherCmnts').setValue(element.payload.doc.data().conditionOut.otherCmnts);
      this.garbageParkingForm.get('conditionOut').get('electricCmnts').setValue(element.payload.doc.data().conditionOut.electricCmnts);
      this.garbageParkingForm.get('conditionOut').get('electricCode').setValue(element.payload.doc.data().conditionOut.electricCode); 
     

      this.sectionId = element.payload.doc.id;
      console.log('sec id', element.payload.doc.id);
      console.log('sec id to password', element.payload.doc.id);
      console.log('report id', this.reportId);
    });

    
  }

  // Update section
  submit() { 
    this.garbageParkingForm.get('type').setValue('Stairwell');
    console.log('sec', this.garbageParkingForm.value);
    // this.router.navigate(['/home/addsection']);
    this.dataService.updateSection(this.reportId, this.sectionId, this.garbageParkingForm.value)
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
