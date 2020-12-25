import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inspection-main-bath-room',
  templateUrl: './inspection-main-bath-room.component.html',
  styleUrls: ['./inspection-main-bath-room.component.scss']
})
export class InspectionMainBathRoomComponent implements OnInit {

  @Input() bathroomSectionDetails;
  @Input() reportId;
  bathroomForm: FormGroup;
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
    this.bathroomForm = this.formBuilder.group({
      
      name: [''],
      type: [''],
      isMain: [],
      subtype: [''], // new attribute
      // IN
      conditionIn: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        cabinetsMirrorCode: [''],
        cabinetsMirrorCmnts: [''],
        tubShowerTapStopperCode: [''],
        tubShowerTapStopperCmnts: [''],
        sinkStopperTapsCode: [''],
        sinkStopperTapsCmnts: [''],
        toiletCode: [''],
        toiletCmnts: [''],
        doorCode: [''],
        doorCmnts: [''],
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
        cabinetsMirrorCode: [''],
        cabinetsMirrorCmnts: [''],
        tubShowerTapStopperCode: [''],
        tubShowerTapStopperCmnts: [''],
        sinkStopperTapsCode: [''],
        sinkStopperTapsCmnts: [''],
        toiletCode: [''],
        toiletCmnts: [''],
        doorCode: [''],
        doorCmnts: [''],
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

    this.bathroomSectionDetails.forEach(element => {
        this.bathroomForm.get('name').setValue(element.payload.doc.data().name);
        // this.bathroomForm.get('type').disable(element.paayload.doc().data().type);
        // this.bathroomForm.get('isMain').setValue(element.payload.doc.data().isMain);
        this.bathroomForm.get('subtype').setValue(element.payload.doc.data().subtype);
      // Move In data
      this.bathroomForm.get('conditionIn').get('cellingCmnts').setValue(element.payload.doc.data().conditionIn.cellingCmnts);
      this.bathroomForm.get('conditionIn').get('tubShowerTapStopperCmnts').setValue(element.payload.doc.data().conditionIn.tubShowerTapStopperCmnts);
      this.bathroomForm.get('conditionIn').get('tubShowerTapStopperCode').setValue(element.payload.doc.data().conditionIn.tubShowerTapStopperCode);
      this.bathroomForm.get('conditionIn').get('cellingCode').setValue(element.payload.doc.data().conditionIn.cellingCode);
      this.bathroomForm.get('conditionIn').get('electricCmnts').setValue(element.payload.doc.data().conditionIn.electricCmnts);
      this.bathroomForm.get('conditionIn').get('electricCode').setValue(element.payload.doc.data().conditionIn.electricCode);
      this.bathroomForm.get('conditionIn').get('floorCode').setValue(element.payload.doc.data().conditionIn.floorCode);
      this.bathroomForm.get('conditionIn').get('floorCmnts').setValue(element.payload.doc.data().conditionIn.floorCmnts);
      this.bathroomForm.get('conditionIn').get('lightingCmnts').setValue(element.payload.doc.data().conditionIn.lightingCmnts);
      this.bathroomForm.get('conditionIn').get('lightingCode').setValue(element.payload.doc.data().conditionIn.lightingCode);
      this.bathroomForm.get('conditionIn').get('windowsCmnts').setValue(element.payload.doc.data().conditionIn.windowsCmnts);
      this.bathroomForm.get('conditionIn').get('windowsCode').setValue(element.payload.doc.data().conditionIn.windowsCode);
      this.bathroomForm.get('conditionIn').get('wallTrimCode').setValue(element.payload.doc.data().conditionIn.wallTrimCode);
      this.bathroomForm.get('conditionIn').get('wallTrimCmnts').setValue(element.payload.doc.data().conditionIn.wallTrimCmnts);
      this.bathroomForm.get('conditionIn').get('sinkStopperTapsCode').setValue(element.payload.doc.data().conditionIn.sinkStopperTapsCode);
      this.bathroomForm.get('conditionIn').get('sinkStopperTapsCmnts').setValue(element.payload.doc.data().conditionIn.sinkStopperTapsCmnts);
      this.bathroomForm.get('conditionIn').get('toiletCode').setValue(element.payload.doc.data().conditionIn.toiletCode);
      this.bathroomForm.get('conditionIn').get('toiletCmnts').setValue(element.payload.doc.data().conditionIn.toiletCmnts);
      this.bathroomForm.get('conditionIn').get('doorCmnts').setValue(element.payload.doc.data().conditionIn.doorCmnts);
      this.bathroomForm.get('conditionIn').get('doorCode').setValue(element.payload.doc.data().conditionIn.doorCode);
      this.bathroomForm.get('conditionIn').get('cabinetsMirrorCode').setValue(element.payload.doc.data().conditionIn.cabinetsMirrorCode);
      this.bathroomForm.get('conditionIn').get('cabinetsMirrorCmnts').setValue(element.payload.doc.data().conditionIn.cabinetsMirrorCmnts);
      
      
      
      // Move Out data
      this.bathroomForm.get('conditionOut').get('cellingCmnts').setValue(element.payload.doc.data().conditionIn.cellingCmnts);
      this.bathroomForm.get('conditionOut').get('tubShowerTapStopperCmnts').setValue(element.payload.doc.data().conditionOut.tubShowerTapStopperCmnts);
      this.bathroomForm.get('conditionOut').get('tubShowerTapStopperCode').setValue(element.payload.doc.data().conditionOut.tubShowerTapStopperCode);
      this.bathroomForm.get('conditionOut').get('cellingCode').setValue(element.payload.doc.data().conditionOut.cellingCode);
      this.bathroomForm.get('conditionOut').get('electricCmnts').setValue(element.payload.doc.data().conditionOut.electricCmnts);
      this.bathroomForm.get('conditionOut').get('electricCode').setValue(element.payload.doc.data().conditionOut.electricCode);
      this.bathroomForm.get('conditionOut').get('floorCode').setValue(element.payload.doc.data().conditionOut.floorCode);
      this.bathroomForm.get('conditionOut').get('floorCmnts').setValue(element.payload.doc.data().conditionOut.floorCmnts);
      this.bathroomForm.get('conditionOut').get('lightingCmnts').setValue(element.payload.doc.data().conditionOut.lightingCmnts);
      this.bathroomForm.get('conditionOut').get('lightingCode').setValue(element.payload.doc.data().conditionOut.lightingCode);
      this.bathroomForm.get('conditionOut').get('windowsCmnts').setValue(element.payload.doc.data().conditionOut.windowsCmnts);
      this.bathroomForm.get('conditionOut').get('windowsCode').setValue(element.payload.doc.data().conditionOut.windowsCode);
      this.bathroomForm.get('conditionOut').get('wallTrimCode').setValue(element.payload.doc.data().conditionOut.wallTrimCode);
      this.bathroomForm.get('conditionOut').get('wallTrimCmnts').setValue(element.payload.doc.data().conditionOut.wallTrimCmnts);
      this.bathroomForm.get('conditionOut').get('sinkStopperTapsCode').setValue(element.payload.doc.data().conditionOut.sinkStopperTapsCode);
      this.bathroomForm.get('conditionOut').get('sinkStopperTapsCmnts').setValue(element.payload.doc.data().conditionOut.sinkStopperTapsCmnts);
      this.bathroomForm.get('conditionOut').get('toiletCode').setValue(element.payload.doc.data().conditionOut.toiletCode);
      this.bathroomForm.get('conditionOut').get('toiletCmnts').setValue(element.payload.doc.data().conditionOut.toiletCmnts);
      this.bathroomForm.get('conditionOut').get('doorCmnts').setValue(element.payload.doc.data().conditionOut.doorCmnts);
      this.bathroomForm.get('conditionOut').get('doorCode').setValue(element.payload.doc.data().conditionOut.doorCode);
      this.bathroomForm.get('conditionOut').get('cabinetsMirrorCode').setValue(element.payload.doc.data().conditionOut.cabinetsMirrorCode);
      this.bathroomForm.get('conditionOut').get('cabinetsMirrorCmnts').setValue(element.payload.doc.data().conditionOut.cabinetsMirrorCmnts);
      
     

      this.sectionId = element.payload.doc.id;
      console.log('sec id', element.payload.doc.id);
      console.log('sec id to password', element.payload.doc.id);
      console.log('report id', this.reportId);
    });

    
  }

  // Update section
  submit() { 
    this.bathroomForm.get('type').setValue('Bathroom');
    console.log('sec', this.bathroomForm.value);
    // this.router.navigate(['/home/addsection']);
    this.dataService.updateSection(this.reportId, this.sectionId, this.bathroomForm.value)
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
