import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inspection-utility-room',
  templateUrl: './inspection-utility-room.component.html',
  styleUrls: ['./inspection-utility-room.component.scss']
})
export class InspectionUtilityRoomComponent implements OnInit {

  @Input() utilityRoomSectionDetails;
  @Input() reportId;
  utilityForm: FormGroup;
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
    this.utilityForm = this.formBuilder.group({
      
      name: [''],
      type: [''],
      // IN
      conditionIn: this.formBuilder.group({
        washerDryerCode: [''],
        wahserDryerCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],
        otherCode: [''],
        otherCmnts: ['']
      }),
      //- OUT 

      conditionOut: this.formBuilder.group({
        washerDryerCode: [''],
        wahserDryerCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],
        otherCode: [''],
        otherCmnts: ['']
      })

    });

    this.utilityRoomSectionDetails.forEach(element => {
        this.utilityForm.get('name').setValue(element.payload.doc.data().name);
        // this.utilityForm.get('type').disable(element.paayload.doc().data().type);
      // Move In data
      this.utilityForm.get('conditionIn').get('washerDryerCode').setValue(element.payload.doc.data().conditionIn.washerDryerCode);      
      this.utilityForm.get('conditionIn').get('wahserDryerCmnts').setValue(element.payload.doc.data().conditionIn.wahserDryerCmnts);
      this.utilityForm.get('conditionIn').get('electricCmnts').setValue(element.payload.doc.data().conditionIn.electricCmnts);
      this.utilityForm.get('conditionIn').get('electricCode').setValue(element.payload.doc.data().conditionIn.electricCode);
      this.utilityForm.get('conditionIn').get('otherCode').setValue(element.payload.doc.data().conditionIn.otherCode);
      this.utilityForm.get('conditionIn').get('otherCmnts').setValue(element.payload.doc.data().conditionIn.otherCmnts);

      
      
      
      // Move Out data
      this.utilityForm.get('conditionOut').get('washerDryerCode').setValue(element.payload.doc.data().conditionOut.washerDryerCode);
      this.utilityForm.get('conditionOut').get('wahserDryerCmnts').setValue(element.payload.doc.data().conditionOut.wahserDryerCmnts);
      this.utilityForm.get('conditionOut').get('otherCode').setValue(element.payload.doc.data().conditionOut.otherCode);
      this.utilityForm.get('conditionOut').get('otherCmnts').setValue(element.payload.doc.data().conditionOut.otherCmnts);
      this.utilityForm.get('conditionOut').get('electricCmnts').setValue(element.payload.doc.data().conditionOut.electricCmnts);
      this.utilityForm.get('conditionOut').get('electricCode').setValue(element.payload.doc.data().conditionOut.electricCode); 
     

      this.sectionId = element.payload.doc.id;
      console.log('sec id', element.payload.doc.id);
      console.log('sec id to password', element.payload.doc.id);
      console.log('report id', this.reportId);
    });

    
  }

  // Update section
  submit() { 
    this.utilityForm.get('type').setValue('Utility-Room');
    console.log('sec', this.utilityForm.value);
    // this.router.navigate(['/home/addsection']);
    this.dataService.updateSection(this.reportId, this.sectionId, this.utilityForm.value)
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
