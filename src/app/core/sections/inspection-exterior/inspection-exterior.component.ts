import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inspection-exterior',
  templateUrl: './inspection-exterior.component.html',
  styleUrls: ['./inspection-exterior.component.scss']
})
export class InspectionExteriorComponent implements OnInit {

  @Input() exteriorSectionDetails;
  @Input() reportId;
  exteriorForm: FormGroup;
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
    this.exteriorForm = this.formBuilder.group({
      
      name: [''],
      type: [''],
      // IN
      conditionIn: this.formBuilder.group({
        frontRearEmtranceCmnts: [''],
        frontRearEmtranceCode: [''],
        patioBalconyDoorsCode: [''],
        patioBalconyDoorsCmnts: [''],
        garbabageContainerCode: [''],
        garbabageContainerCmnts: [''],        
        galssAndFramesCmnts: [''],
        galssAndFramesCode: [''],
        stucoAndSidingCmnts: [''],
        stucoAndSidingCode: [''],
        lightingCmnts: [''],
        lightingCode: [''],
        groundsAndWallsCode: [''],
        groundsAndWallsCmnts: [''],
        electricCmnts: [''],
        electricCode: ['']
      }),
      //- OUT 

      conditionOut: this.formBuilder.group({
        frontRearEmtranceCmnts: [''],
        frontRearEmtranceCode: [''],
        patioBalconyDoorsCode: [''],
        patioBalconyDoorsCmnts: [''],
        garbabageContainerCode: [''],
        garbabageContainerCmnts: [''],        
        galssAndFramesCmnts: [''],
        galssAndFramesCode: [''],
        stucoAndSidingCmnts: [''],
        stucoAndSidingCode: [''],
        lightingCmnts: [''],
        lightingCode: [''],
        groundsAndWallsCode: [''],
        groundsAndWallsCmnts: [''],
        electricCmnts: [''],
        electricCode: ['']
      })

    });

    this.exteriorSectionDetails.forEach(element => {
        this.exteriorForm.get('name').setValue(element.payload.doc.data().name);
        // this.exteriorForm.get('type').disable(element.paayload.doc().data().type);
      // Move In data
      this.exteriorForm.get('conditionIn').get('frontRearEmtranceCmnts').setValue(element.payload.doc.data().conditionIn.frontRearEmtranceCmnts);
      this.exteriorForm.get('conditionIn').get('frontRearEmtranceCode').setValue(element.payload.doc.data().conditionIn.frontRearEmtranceCode);
      this.exteriorForm.get('conditionIn').get('patioBalconyDoorsCode').setValue(element.payload.doc.data().conditionIn.patioBalconyDoorsCode);
      this.exteriorForm.get('conditionIn').get('patioBalconyDoorsCmnts').setValue(element.payload.doc.data().conditionIn.patioBalconyDoorsCmnts);
      this.exteriorForm.get('conditionIn').get('electricCmnts').setValue(element.payload.doc.data().conditionIn.electricCmnts);
      this.exteriorForm.get('conditionIn').get('electricCode').setValue(element.payload.doc.data().conditionIn.electricCode);
      this.exteriorForm.get('conditionIn').get('garbabageContainerCode').setValue(element.payload.doc.data().conditionIn. garbabageContainerCode);
      this.exteriorForm.get('conditionIn').get('garbabageContainerCmnts').setValue(element.payload.doc.data().conditionIn.garbabageContainerCmnts);      
      this.exteriorForm.get('conditionIn').get('lightingCmnts').setValue(element.payload.doc.data().conditionIn.lightingCmnts);
      this.exteriorForm.get('conditionIn').get('lightingCode').setValue(element.payload.doc.data().conditionIn.lightingCode);      
      this.exteriorForm.get('conditionIn').get('galssAndFramesCmnts').setValue(element.payload.doc.data().conditionIn.galssAndFramesCmnts);
      this.exteriorForm.get('conditionIn').get('galssAndFramesCode').setValue(element.payload.doc.data().conditionIn.galssAndFramesCode);
      this.exteriorForm.get('conditionIn').get('stucoAndSidingCode').setValue(element.payload.doc.data().conditionIn.stucoAndSidingCode);
      this.exteriorForm.get('conditionIn').get('stucoAndSidingCmnts').setValue(element.payload.doc.data().conditionIn.stucoAndSidingCmnts);
      this.exteriorForm.get('conditionIn').get('groundsAndWallsCode').setValue(element.payload.doc.data().conditionIn.groundsAndWallsCode);
      this.exteriorForm.get('conditionIn').get('groundsAndWallsCmnts').setValue(element.payload.doc.data().conditionIn.groundsAndWallsCmnts);

      
      
      
      // Move Out data
            
      this.exteriorForm.get('conditionOut').get('frontRearEmtranceCmnts').setValue(element.payload.doc.data().conditionOut.frontRearEmtranceCmnts);
      this.exteriorForm.get('conditionOut').get('frontRearEmtranceCode').setValue(element.payload.doc.data().conditionOut.frontRearEmtranceCode);
      this.exteriorForm.get('conditionOut').get('patioBalconyDoorsCode').setValue(element.payload.doc.data().conditionOut.patioBalconyDoorsCode);
      this.exteriorForm.get('conditionOut').get('patioBalconyDoorsCmnts').setValue(element.payload.doc.data().conditionOut.patioBalconyDoorsCmnts);
      this.exteriorForm.get('conditionOut').get('electricCmnts').setValue(element.payload.doc.data().conditionOut.electricCmnts);
      this.exteriorForm.get('conditionOut').get('electricCode').setValue(element.payload.doc.data().conditionOut.electricCode);
      this.exteriorForm.get('conditionOut').get('garbabageContainerCode').setValue(element.payload.doc.data().conditionOut. garbabageContainerCode);
      this.exteriorForm.get('conditionOut').get('garbabageContainerCmnts').setValue(element.payload.doc.data().conditionOut.garbabageContainerCmnts);      
      this.exteriorForm.get('conditionOut').get('lightingCmnts').setValue(element.payload.doc.data().conditionOut.lightingCmnts);
      this.exteriorForm.get('conditionOut').get('lightingCode').setValue(element.payload.doc.data().conditionOut.lightingCode);      
      this.exteriorForm.get('conditionOut').get('galssAndFramesCmnts').setValue(element.payload.doc.data().conditionOut.galssAndFramesCmnts);
      this.exteriorForm.get('conditionOut').get('galssAndFramesCode').setValue(element.payload.doc.data().conditionOut.galssAndFramesCode);
      this.exteriorForm.get('conditionOut').get('stucoAndSidingCode').setValue(element.payload.doc.data().conditionOut.stucoAndSidingCode);
      this.exteriorForm.get('conditionOut').get('stucoAndSidingCmnts').setValue(element.payload.doc.data().conditionOut.stucoAndSidingCmnts);
      this.exteriorForm.get('conditionOut').get('groundsAndWallsCode').setValue(element.payload.doc.data().conditionOut.groundsAndWallsCode);
      this.exteriorForm.get('conditionOut').get('groundsAndWallsCmnts').setValue(element.payload.doc.data().conditionOut.groundsAndWallsCmnts);
      
     

      this.sectionId = element.payload.doc.id;
      console.log('sec id', element.payload.doc.id);
      console.log('sec id to password', element.payload.doc.id);
      console.log('report id', this.reportId);
    });

    
  }

  // Update section
  submit() { 
    this.exteriorForm.get('type').setValue('Kitchen');
    console.log('sec', this.exteriorForm.value);
    // this.router.navigate(['/home/addsection']);
    this.dataService.updateSection(this.reportId, this.sectionId, this.exteriorForm.value)
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
