import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inspection-stairwell-hall',
  templateUrl: './inspection-stairwell-hall.component.html',
  styleUrls: ['./inspection-stairwell-hall.component.scss']
})
export class InspectionStairwellHallComponent implements OnInit {

  @Input() stairwellSectionDetails;
  @Input() reportId;
  stairForm: FormGroup;
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
    this.stairForm = this.formBuilder.group({
      
      name: [''],
      type: [''],
      // IN
      conditionIn: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        wallTrimCode: [''],
        wallTrimCmnts: [''],
        closetsCode: [''],
        closetsCmnts: [''],
        treadAndLandingsCode: [''],
        treadAndLandingsCmnts: [''],
        railingBannisterCode: [''],
        railingBannisterCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],
        lightingCmnts: [''],
        lightingCode: [''],
        windowsCmnts: [''],
        windowsCode: [''],
        otherCode: [''],
        otherCmnts: ['']
      }),
      //- OUT 

      conditionOut: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        wallTrimCode: [''],
        wallTrimCmnts: [''],
        closetsCode: [''],
        closetsCmnts: [''],
        treadAndLandingsCode: [''],
        treadAndLandingsCmnts: [''],
        railingBannisterCode: [''],
        railingBannisterCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],
        lightingCmnts: [''],
        lightingCode: [''],
        windowsCmnts: [''],
        windowsCode: [''],
        otherCode: [''],
        otherCmnts: ['']
      })

    });

    this.stairwellSectionDetails.forEach(element => {
        this.stairForm.get('name').setValue(element.payload.doc.data().name);
        // this.stairForm.get('type').disable(element.paayload.doc().data().type);
      // Move In data
      this.stairForm.get('conditionIn').get('cellingCmnts').setValue(element.payload.doc.data().conditionIn.cellingCmnts);      
      this.stairForm.get('conditionIn').get('cellingCode').setValue(element.payload.doc.data().conditionIn.cellingCode);
      this.stairForm.get('conditionIn').get('electricCmnts').setValue(element.payload.doc.data().conditionIn.electricCmnts);
      this.stairForm.get('conditionIn').get('electricCode').setValue(element.payload.doc.data().conditionIn.electricCode);
      this.stairForm.get('conditionIn').get('closetsCode').setValue(element.payload.doc.data().conditionIn.closetsCode);
      this.stairForm.get('conditionIn').get('closetsCmnts').setValue(element.payload.doc.data().conditionIn.closetsCmnts);
      this.stairForm.get('conditionIn').get('lightingCmnts').setValue(element.payload.doc.data().conditionIn.lightingCmnts);
      this.stairForm.get('conditionIn').get('lightingCode').setValue(element.payload.doc.data().conditionIn.lightingCode);
      this.stairForm.get('conditionIn').get('windowsCmnts').setValue(element.payload.doc.data().conditionIn.windowsCmnts);
      this.stairForm.get('conditionIn').get('windowsCode').setValue(element.payload.doc.data().conditionIn.windowsCode);
      this.stairForm.get('conditionIn').get('wallTrimCode').setValue(element.payload.doc.data().conditionIn.wallTrimCode);
      this.stairForm.get('conditionIn').get('wallTrimCmnts').setValue(element.payload.doc.data().conditionIn.wallTrimCmnts);
      this.stairForm.get('conditionIn').get('treadAndLandingsCode').setValue(element.payload.doc.data().conditionIn.treadAndLandingsCode);
      this.stairForm.get('conditionIn').get('treadAndLandingsCmnts').setValue(element.payload.doc.data().conditionIn.treadAndLandingsCmnts);
      this.stairForm.get('conditionIn').get('railingBannisterCode').setValue(element.payload.doc.data().conditionIn.AirConditioningCode);
      this.stairForm.get('conditionIn').get('railingBannisterCmnts').setValue(element.payload.doc.data().conditionIn.railingBannisterCmnts);

      
      
      
      // Move Out data
      this.stairForm.get('conditionOut').get('cellingCmnts').setValue(element.payload.doc.data().conditionOut.cellingCmnts);
      this.stairForm.get('conditionOut').get('closetsCmnts').setValue(element.payload.doc.data().conditionOut.closetsCmnts);
      this.stairForm.get('conditionOut').get('closetsCode').setValue(element.payload.doc.data().conditionOut.closetsCode);
      this.stairForm.get('conditionOut').get('cellingCode').setValue(element.payload.doc.data().conditionOut.cellingCode);
      this.stairForm.get('conditionOut').get('electricCmnts').setValue(element.payload.doc.data().conditionOut.electricCmnts);
      this.stairForm.get('conditionOut').get('electricCode').setValue(element.payload.doc.data().conditionOut.electricCode);     
      this.stairForm.get('conditionOut').get('lightingCmnts').setValue(element.payload.doc.data().conditionOut.lightingCmnts);
      this.stairForm.get('conditionOut').get('lightingCode').setValue(element.payload.doc.data().conditionOut.lightingCode);
      this.stairForm.get('conditionOut').get('windowsCmnts').setValue(element.payload.doc.data().conditionOut.windowsCmnts);
      this.stairForm.get('conditionOut').get('windowsCode').setValue(element.payload.doc.data().conditionOut.windowsCode);
      this.stairForm.get('conditionOut').get('wallTrimCode').setValue(element.payload.doc.data().conditionOut.wallTrimCode);
      this.stairForm.get('conditionOut').get('wallTrimCmnts').setValue(element.payload.doc.data().conditionOut.wallTrimCmnts);
      this.stairForm.get('conditionOut').get('treadAndLandingsCode').setValue(element.payload.doc.data().conditionOut.treadAndLandingsCode);
      this.stairForm.get('conditionOut').get('treadAndLandingsCmnts').setValue(element.payload.doc.data().conditionOut.treadAndLandingsCmnts);
      this.stairForm.get('conditionOut').get('railingBannisterCode').setValue(element.payload.doc.data().conditionOut.railingBannisterCode);
      this.stairForm.get('conditionOut').get('railingBannisterCmnts').setValue(element.payload.doc.data().conditionOut.railingBannisterCmnts);

      
     

      this.sectionId = element.payload.doc.id;
      console.log('sec id', element.payload.doc.id);
      console.log('sec id to password', element.payload.doc.id);
      console.log('report id', this.reportId);
    });

    
  }

  // Update section
  submit() { 
    this.stairForm.get('type').setValue('Stairwell');
    console.log('sec', this.stairForm.value);
    // this.router.navigate(['/home/addsection']);
    this.dataService.updateSection(this.reportId, this.sectionId, this.stairForm.value)
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
