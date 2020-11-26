import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inspection-keys-controls',
  templateUrl: './inspection-keys-controls.component.html',
  styleUrls: ['./inspection-keys-controls.component.scss']
})
export class InspectionKeysControlsComponent implements OnInit {

  @Input() keyControlSectionDetails;
  @Input() reportId;
  keyControlForm: FormGroup;
  sectionId;
  msg = '';

  sectionTitle: string[] = [
    'Walls and Trim', 
    'Cellings',
    'Closets',
    ''
  ];

  keys = [
    { 'number': 0},
    { 'number': 1},
    { 'number': 2},
    { 'number': 3},
    { 'number': 4},
    { 'number': 5},
    { 'number': 6},
    { 'number': 7},
    { 'number': 8},
    { 'number': 9},
    { 'number': 10}
  ]

  constructor(private router: Router,
              private dataService: DataService,
              // private _snackBar: MatSnackBar,
              private notificationService: NotificationService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // console.log('section', this.entrySectionDetails);
    this.keyControlForm = this.formBuilder.group({
      
      name: [''],
      type: [''],
      // IN
      conditionIn: this.formBuilder.group({
        buildingEntrandeKey: [0],
        buildingEntrandeKeyCmnts: [''],
        rentalUnitEntranceKey: [0],
        rentalUnitEntranceCmnts: [''],
        rentalUnityDeadBoltKey: [0],
        rentalUnityDeadBoltCmnts: [''],
        parkginRemoteControlKey: [0],
        parkginRemoteControlCmnts: [''],
        otherKey: [0],
        otherCmnts: ['']
      }),
      //- OUT 

      conditionOut: this.formBuilder.group({
        buildingEntrandeKey: [0],
        buildingEntrandeKeyCmnts: [''],
        rentalUnitEntranceKey: [0],
        rentalUnitEntranceCmnts: [''],
        rentalUnityDeadBoltKey: [0],
        rentalUnityDeadBoltCmnts: [''],
        parkginRemoteControlKey: [0],
        parkginRemoteControlCmnts: [''],
        otherKey: [0],
        otherCmnts: ['']
      })

    });

    this.keyControlSectionDetails.forEach(element => {
        this.keyControlForm.get('name').setValue(element.payload.doc.data().name);
        // this.keyControlForm.get('type').disable(element.paayload.doc().data().type);
      // Move In data
      this.keyControlForm.get('conditionIn').get('buildingEntrandeKey').setValue(element.payload.doc.data().conditionIn.buildingEntrandeKey);
      this.keyControlForm.get('conditionIn').get('rentalUnitEntranceKey').setValue(element.payload.doc.data().conditionIn.rentalUnitEntranceKey);
      this.keyControlForm.get('conditionIn').get('rentalUnitEntranceCmnts').setValue(element.payload.doc.data().conditionIn.rentalUnitEntranceCmnts);
      this.keyControlForm.get('conditionIn').get('buildingEntrandeKeyCmnts').setValue(element.payload.doc.data().conditionIn.buildingEntrandeKeyCmnts);
      this.keyControlForm.get('conditionIn').get('rentalUnityDeadBoltKey').setValue(element.payload.doc.data().conditionIn.rentalUnityDeadBoltKey);
      this.keyControlForm.get('conditionIn').get('rentalUnityDeadBoltCmnts').setValue(element.payload.doc.data().conditionIn.rentalUnityDeadBoltCmnts);
      this.keyControlForm.get('conditionIn').get('parkginRemoteControlKey').setValue(element.payload.doc.data().conditionIn.parkginRemoteControlKey);     
      this.keyControlForm.get('conditionIn').get('parkginRemoteControlCmnts').setValue(element.payload.doc.data().conditionIn.parkginRemoteControlCmnts);
      this.keyControlForm.get('conditionIn').get('otherKey').setValue(element.payload.doc.data().conditionIn.otherKey);
      this.keyControlForm.get('conditionIn').get('otherCmnts').setValue(element.payload.doc.data().conditionIn.otherCmnts);

      
      
      // Move Out data

      this.keyControlForm.get('conditionOut').get('buildingEntrandeKey').setValue(element.payload.doc.data().conditionOut.buildingEntrandeKey);
      this.keyControlForm.get('conditionOut').get('rentalUnitEntranceKey').setValue(element.payload.doc.data().conditionOut.rentalUnitEntranceKey);
      this.keyControlForm.get('conditionOut').get('rentalUnitEntranceCmnts').setValue(element.payload.doc.data().conditionOut.rentalUnitEntranceCmnts);
      this.keyControlForm.get('conditionOut').get('buildingEntrandeKeyCmnts').setValue(element.payload.doc.data().conditionOut.buildingEntrandeKeyCmnts);
      this.keyControlForm.get('conditionOut').get('rentalUnityDeadBoltKey').setValue(element.payload.doc.data().conditionOut.rentalUnityDeadBoltKey);
      this.keyControlForm.get('conditionOut').get('rentalUnityDeadBoltCmnts').setValue(element.payload.doc.data().conditionOut.rentalUnityDeadBoltCmnts);
      this.keyControlForm.get('conditionOut').get('parkginRemoteControlKey').setValue(element.payload.doc.data().conditionOut.parkginRemoteControlKey);     
      this.keyControlForm.get('conditionOut').get('parkginRemoteControlCmnts').setValue(element.payload.doc.data().conditionOut.parkginRemoteControlCmnts);
      this.keyControlForm.get('conditionOut').get('otherKey').setValue(element.payload.doc.data().conditionOut.otherKey);
      this.keyControlForm.get('conditionOut').get('otherCmnts').setValue(element.payload.doc.data().conditionOut.otherCmnts);

      
      

      this.sectionId = element.payload.doc.id;
      console.log('sec id', element.payload.doc.id);
      console.log('sec id to password', element.payload.doc.id);
      console.log('report id', this.reportId);
    });

    
  }

  // Update section
  submit() { 
    this.keyControlForm.get('type').setValue('Kitchen');
    console.log('sec', this.keyControlForm.value);
    // this.router.navigate(['/home/addsection']);
    this.dataService.updateSection(this.reportId, this.sectionId, this.keyControlForm.value)
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
