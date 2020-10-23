import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../../services/data.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-inspection-entry',
  templateUrl: './inspection-entry.component.html',
  styleUrls: ['./inspection-entry.component.scss']
})
export class InspectionEntryComponent implements OnInit {

  @Input() entrySectionDetails;
  @Input() reportId;
  entryForm: FormGroup;
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
              private _snackBar: MatSnackBar,
              private notificationService: NotificationService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // console.log('section', this.entrySectionDetails);
    this.entryForm = this.formBuilder.group({
      // Temp
      // code: ['G'],
      // comments: ['N/A'],
      // name: [''],
      // type: [''],
      // // IN
      // cellingCmnts_in: [''],
      // cellingCode_in: [''],
      // closetsCode_in: [''],
      // closetsCmnts_in: [''],
      // electricCmnts_in: [''],
      // electricCode_in: [''],
      // floorCmnts_in: [''],
      // floorCode_in: [''],
      // lightingCmnts_in: [''],
      // lightingCode_in: [''],
      // wallTrimCmnts_in: [''],
      // wallTrimCode_in: [''],
      // windowsCmnts_in: [''],
      // windowsCode_in: [''],

      // //- OUT
      // cellingCmnts_out: [''],
      // cellingCode_out: [''],
      // closetsCode_out: [''],
      // closetsCmnts_out: [''],      
      // electricCmnts_out: [''],
      // electricCode_out: [''],
      // floorCmnts_out: [''],
      // floorCode_out: [''],
      // lightingCmnts_out: [''],
      // lightingCode_out: [''],
      // wallTrimCmnts_out: [''],
      // wallTrimCode_out: [''],
      // windowsCmnts_out: [''],
      // windowsCode_out: ['']

      name: [''],
      type: [''],
      // IN
      conditionIn: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        closetsCode: [''],
        closetsCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],
        floorCmnts: [''],
        floorCode: [''],
        lightingCmnts: [''],
        lightingCode: [''],
        wallTrimCmnts: [''],
        wallTrimCode: [''],
        windowsCmnts: [''],
        windowsCode: ['']
      }),
      //- OUT 

      conditionOut: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        closetsCode: [''],
        closetsCmnts: [''],      
        electricCmnts: [''],
        electricCode: [''],
        floorCmnts: [''],
        floorCode: [''],
        lightingCmnts: [''],
        lightingCode: [''],
        wallTrimCmnts: [''],
        wallTrimCode: [''],
        windowsCmnts: [''],
        windowsCode: ['']
      })

    });

    this.entrySectionDetails.forEach(element => {
        this.entryForm.get('name').setValue(element.payload.doc.data().name);
      // Move In data
      this.entryForm.get('conditionIn').get('cellingCmnts').setValue(element.payload.doc.data().conditionIn.cellingCmnts);
      this.entryForm.get('conditionIn').get('closetsCmnts').setValue(element.payload.doc.data().conditionIn.closetsCmnts);
      this.entryForm.get('conditionIn').get('closetsCode').setValue(element.payload.doc.data().conditionIn.closetsCode);
      this.entryForm.get('conditionIn').get('cellingCode').setValue(element.payload.doc.data().conditionIn.cellingCode);
      this.entryForm.get('conditionIn').get('electricCmnts').setValue(element.payload.doc.data().conditionIn.electricCmnts);
      this.entryForm.get('conditionIn').get('electricCode').setValue(element.payload.doc.data().conditionIn.electricCode);
      this.entryForm.get('conditionIn').get('floorCode').setValue(element.payload.doc.data().conditionIn.floorCode);
      this.entryForm.get('conditionIn').get('floorCmnts').setValue(element.payload.doc.data().conditionIn.floorCmnts);
      this.entryForm.get('conditionIn').get('lightingCmnts').setValue(element.payload.doc.data().conditionIn.lightingCmnts);
      this.entryForm.get('conditionIn').get('lightingCode').setValue(element.payload.doc.data().conditionIn.lightingCode);
      this.entryForm.get('conditionIn').get('windowsCmnts').setValue(element.payload.doc.data().conditionIn.windowsCmnts);
      this.entryForm.get('conditionIn').get('windowsCode').setValue(element.payload.doc.data().conditionIn.windowsCode);
      this.entryForm.get('conditionIn').get('wallTrimCode').setValue(element.payload.doc.data().conditionIn.wallTrimCode);
      this.entryForm.get('conditionIn').get('wallTrimCmnts').setValue(element.payload.doc.data().conditionIn.wallTrimCmnts);

      // Move Out data
      this.entryForm.get('conditionOut').get('cellingCmnts').setValue(element.payload.doc.data().conditionOut.cellingCmnts);
      this.entryForm.get('conditionOut').get('closetsCmnts').setValue(element.payload.doc.data().conditionOut.closetsCmnts);
      this.entryForm.get('conditionOut').get('closetsCode').setValue(element.payload.doc.data().conditionOut.closetsCode);
      this.entryForm.get('conditionOut').get('cellingCode').setValue(element.payload.doc.data().conditionOut.cellingCode);

      this.entryForm.get('conditionOut').get('electricCmnts').setValue(element.payload.doc.data().conditionOut.electricCmnts);
      this.entryForm.get('conditionOut').get('electricCode').setValue(element.payload.doc.data().conditionOut.electricCode);
      this.entryForm.get('conditionOut').get('floorCode').setValue(element.payload.doc.data().conditionOut.floorCode);
      this.entryForm.get('conditionOut').get('floorCmnts').setValue(element.payload.doc.data().conditionOut.floorCmnts);
      this.entryForm.get('conditionOut').get('lightingCmnts').setValue(element.payload.doc.data().conditionOut.lightingCmnts);
      this.entryForm.get('conditionOut').get('lightingCode').setValue(element.payload.doc.data().conditionOut.lightingCode);
      this.entryForm.get('conditionOut').get('windowsCmnts').setValue(element.payload.doc.data().conditionOut.windowsCmnts);
      this.entryForm.get('conditionOut').get('windowsCode').setValue(element.payload.doc.data().conditionOut.windowsCode);
      this.entryForm.get('conditionOut').get('wallTrimCode').setValue(element.payload.doc.data().conditionOut.wallTrimCode);
      this.entryForm.get('conditionOut').get('wallTrimCmnts').setValue(element.payload.doc.data().conditionOut.wallTrimCmnts);

      this.sectionId = element.payload.doc.id;
      console.log('sec id', element.payload.doc.id);
      console.log('sec id to password', element.payload.doc.id);
      console.log('report id', this.reportId);
    });

    
  }

  // Update section
  submit() { 
    this.entryForm.get('type').setValue('Entry');
    console.log('sec', this.entryForm.value);
    // this.router.navigate(['/home/addsection']);
    this.dataService.updateSection(this.reportId, this.sectionId, this.entryForm.value)
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

  openSnackBar(message: string, action: string, color: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      panelClass: [color]
    })
  }
}
