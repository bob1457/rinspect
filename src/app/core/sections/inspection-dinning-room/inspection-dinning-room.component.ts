import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inspection-dinning-room',
  templateUrl: './inspection-dinning-room.component.html',
  styleUrls: ['./inspection-dinning-room.component.scss']
})
export class InspectionDinningRoomComponent implements OnInit {

  @Input() dinningroomSectionDetails;
  @Input() reportId;
  dinningForm: FormGroup;
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
    this.dinningForm = this.formBuilder.group({
      
      name: [''],
      type: [''],
      // IN
      conditionIn: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],        
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

    this.dinningroomSectionDetails.forEach(element => {
        this.dinningForm.get('name').setValue(element.payload.doc.data().name);
        // this.dinningForm.get('type').disable(element.paayload.doc().data().type);
      // Move In data
      this.dinningForm.get('conditionIn').get('cellingCmnts').setValue(element.payload.doc.data().conditionIn.cellingCmnts);      
      this.dinningForm.get('conditionIn').get('cellingCode').setValue(element.payload.doc.data().conditionIn.cellingCode);
      this.dinningForm.get('conditionIn').get('electricCmnts').setValue(element.payload.doc.data().conditionIn.electricCmnts);
      this.dinningForm.get('conditionIn').get('electricCode').setValue(element.payload.doc.data().conditionIn.electricCode);
      this.dinningForm.get('conditionIn').get('floorCode').setValue(element.payload.doc.data().conditionIn.floorCode);
      this.dinningForm.get('conditionIn').get('floorCmnts').setValue(element.payload.doc.data().conditionIn.floorCmnts);
      this.dinningForm.get('conditionIn').get('lightingCmnts').setValue(element.payload.doc.data().conditionIn.lightingCmnts);
      this.dinningForm.get('conditionIn').get('lightingCode').setValue(element.payload.doc.data().conditionIn.lightingCode);
      this.dinningForm.get('conditionIn').get('windowsCmnts').setValue(element.payload.doc.data().conditionIn.windowsCmnts);
      this.dinningForm.get('conditionIn').get('windowsCode').setValue(element.payload.doc.data().conditionIn.windowsCode);
      this.dinningForm.get('conditionIn').get('wallTrimCode').setValue(element.payload.doc.data().conditionIn.wallTrimCode);
      this.dinningForm.get('conditionIn').get('wallTrimCmnts').setValue(element.payload.doc.data().conditionIn.wallTrimCmnts);
      
      
      
      
      // Move Out data
      this.dinningForm.get('conditionOut').get('cellingCmnts').setValue(element.payload.doc.data().conditionOut.cellingCmnts);      
      this.dinningForm.get('conditionOut').get('cellingCode').setValue(element.payload.doc.data().conditionOut.cellingCode);
      this.dinningForm.get('conditionOut').get('electricCmnts').setValue(element.payload.doc.data().conditionOut.electricCmnts);
      this.dinningForm.get('conditionOut').get('electricCode').setValue(element.payload.doc.data().conditionOut.electricCode);
      this.dinningForm.get('conditionOut').get('floorCode').setValue(element.payload.doc.data().conditionOut.floorCode);
      this.dinningForm.get('conditionOut').get('floorCmnts').setValue(element.payload.doc.data().conditionOut.floorCmnts);
      this.dinningForm.get('conditionOut').get('lightingCmnts').setValue(element.payload.doc.data().conditionOut.lightingCmnts);
      this.dinningForm.get('conditionOut').get('lightingCode').setValue(element.payload.doc.data().conditionOut.lightingCode);
      this.dinningForm.get('conditionOut').get('windowsCmnts').setValue(element.payload.doc.data().conditionOut.windowsCmnts);
      this.dinningForm.get('conditionOut').get('windowsCode').setValue(element.payload.doc.data().conditionOut.windowsCode);
      this.dinningForm.get('conditionOut').get('wallTrimCode').setValue(element.payload.doc.data().conditionOut.wallTrimCode);
      this.dinningForm.get('conditionOut').get('wallTrimCmnts').setValue(element.payload.doc.data().conditionOut.wallTrimCmnts);
      
      
     

      this.sectionId = element.payload.doc.id;
      console.log('sec id', element.payload.doc.id);
      console.log('sec id to password', element.payload.doc.id);
      console.log('report id', this.reportId);
    });

    
  }

  // Update section
  submit() { 
    this.dinningForm.get('type').setValue('Dinning-Room');
    console.log('sec', this.dinningForm.value);
    // this.router.navigate(['/home/addsection']);
    this.dataService.updateSection(this.reportId, this.sectionId, this.dinningForm.value)
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
