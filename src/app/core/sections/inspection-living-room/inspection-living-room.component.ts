import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inspection-living-room',
  templateUrl: './inspection-living-room.component.html',
  styleUrls: ['./inspection-living-room.component.scss']
})
export class InspectionLivingRoomComponent implements OnInit {

  @Input() LivingroomSectionDetails;
  @Input() reportId;
  livingForm: FormGroup;
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
    this.livingForm = this.formBuilder.group({
      
      name: [''],
      type: [''],
      subtype: [''], // new attribute
      // IN
      conditionIn: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        closetsCode: [''],
        closetsCmnts: [''],
        TVCmnts: [''],
        TVCode: [''],
        AirConditioningCmnts: [''],
        AirConditioningCode: [''],
        FireplaceCmnts: [''],
        FireplaceCode: [''],
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
        TVCmnts: [''],
        TVCode: [''],
        AirConditioningCmnts: [''],
        AirConditioningCode: [''],
        FireplaceCmnts: [''],
        FireplaceCode: [''],
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

    this.LivingroomSectionDetails.forEach(element => {
        this.livingForm.get('name').setValue(element.payload.doc.data().name);
        this.livingForm.get('subtype').setValue(element.payload.doc.data().subtype);
        // this.livingForm.get('type').disable(element.paayload.doc().data().type);
      // Move In data
      this.livingForm.get('conditionIn').get('cellingCmnts').setValue(element.payload.doc.data().conditionIn.cellingCmnts);
      this.livingForm.get('conditionIn').get('closetsCmnts').setValue(element.payload.doc.data().conditionIn.closetsCmnts);
      this.livingForm.get('conditionIn').get('closetsCode').setValue(element.payload.doc.data().conditionIn.closetsCode);
      this.livingForm.get('conditionIn').get('cellingCode').setValue(element.payload.doc.data().conditionIn.cellingCode);
      this.livingForm.get('conditionIn').get('electricCmnts').setValue(element.payload.doc.data().conditionIn.electricCmnts);
      this.livingForm.get('conditionIn').get('electricCode').setValue(element.payload.doc.data().conditionIn.electricCode);
      this.livingForm.get('conditionIn').get('floorCode').setValue(element.payload.doc.data().conditionIn.floorCode);
      this.livingForm.get('conditionIn').get('floorCmnts').setValue(element.payload.doc.data().conditionIn.floorCmnts);
      this.livingForm.get('conditionIn').get('lightingCmnts').setValue(element.payload.doc.data().conditionIn.lightingCmnts);
      this.livingForm.get('conditionIn').get('lightingCode').setValue(element.payload.doc.data().conditionIn.lightingCode);
      this.livingForm.get('conditionIn').get('windowsCmnts').setValue(element.payload.doc.data().conditionIn.windowsCmnts);
      this.livingForm.get('conditionIn').get('windowsCode').setValue(element.payload.doc.data().conditionIn.windowsCode);
      this.livingForm.get('conditionIn').get('wallTrimCode').setValue(element.payload.doc.data().conditionIn.wallTrimCode);
      this.livingForm.get('conditionIn').get('wallTrimCmnts').setValue(element.payload.doc.data().conditionIn.wallTrimCmnts);
      this.livingForm.get('conditionIn').get('TVCode').setValue(element.payload.doc.data().conditionIn.TVCode);
      this.livingForm.get('conditionIn').get('TVCmnts').setValue(element.payload.doc.data().conditionIn.TVCmnts);
      this.livingForm.get('conditionIn').get('AirConditioningCode').setValue(element.payload.doc.data().conditionIn.AirConditioningCode);
      this.livingForm.get('conditionIn').get('AirConditioningCmnts').setValue(element.payload.doc.data().conditionIn.AirConditioningCmnts);
      this.livingForm.get('conditionIn').get('FireplaceCmnts').setValue(element.payload.doc.data().conditionIn.FireplaceCmnts);
      this.livingForm.get('conditionIn').get('FireplaceCode').setValue(element.payload.doc.data().conditionIn.FireplaceCode);
      
      
      
      // Move Out data
      this.livingForm.get('conditionOut').get('cellingCmnts').setValue(element.payload.doc.data().conditionOut.cellingCmnts);
      this.livingForm.get('conditionOut').get('closetsCmnts').setValue(element.payload.doc.data().conditionOut.closetsCmnts);
      this.livingForm.get('conditionOut').get('closetsCode').setValue(element.payload.doc.data().conditionOut.closetsCode);
      this.livingForm.get('conditionOut').get('cellingCode').setValue(element.payload.doc.data().conditionOut.cellingCode);
      this.livingForm.get('conditionOut').get('electricCmnts').setValue(element.payload.doc.data().conditionOut.electricCmnts);
      this.livingForm.get('conditionOut').get('electricCode').setValue(element.payload.doc.data().conditionOut.electricCode);
      this.livingForm.get('conditionOut').get('floorCode').setValue(element.payload.doc.data().conditionOut.floorCode);
      this.livingForm.get('conditionOut').get('floorCmnts').setValue(element.payload.doc.data().conditionOut.floorCmnts);
      this.livingForm.get('conditionOut').get('lightingCmnts').setValue(element.payload.doc.data().conditionOut.lightingCmnts);
      this.livingForm.get('conditionOut').get('lightingCode').setValue(element.payload.doc.data().conditionOut.lightingCode);
      this.livingForm.get('conditionOut').get('windowsCmnts').setValue(element.payload.doc.data().conditionOut.windowsCmnts);
      this.livingForm.get('conditionOut').get('windowsCode').setValue(element.payload.doc.data().conditionOut.windowsCode);
      this.livingForm.get('conditionOut').get('wallTrimCode').setValue(element.payload.doc.data().conditionOut.wallTrimCode);
      this.livingForm.get('conditionOut').get('wallTrimCmnts').setValue(element.payload.doc.data().conditionOut.wallTrimCmnts);
      this.livingForm.get('conditionOut').get('TVCode').setValue(element.payload.doc.data().conditionOut.TVCode);
      this.livingForm.get('conditionOut').get('TVCmnts').setValue(element.payload.doc.data().conditionOut.TVCmnts);
      this.livingForm.get('conditionOut').get('AirConditioningCode').setValue(element.payload.doc.data().conditionOut.AirConditioningCode);
      this.livingForm.get('conditionOut').get('AirConditioningCmnts').setValue(element.payload.doc.data().conditionOut.AirConditioningCmnts);
      this.livingForm.get('conditionOut').get('FireplaceCmnts').setValue(element.payload.doc.data().conditionOut.FireplaceCmnts);
      this.livingForm.get('conditionOut').get('FireplaceCode').setValue(element.payload.doc.data().conditionOut.FireplaceCode);
      
     

      this.sectionId = element.payload.doc.id;
      console.log('sec id', element.payload.doc.id);
      console.log('sec id to password', element.payload.doc.id);
      console.log('report id', this.reportId);
    });

    
  }

  // Update section
  submit() { 
    this.livingForm.get('type').setValue('Living-Room');
    this.livingForm.get('subtype').setValue(this.livingForm.value.subtype);
    console.log('sec', this.livingForm.value);
    // this.router.navigate(['/home/addsection']);
    this.dataService.updateSection(this.reportId, this.sectionId, this.livingForm.value)
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
