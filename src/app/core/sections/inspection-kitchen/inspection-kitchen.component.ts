import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NotificationService } from 'src/app/shared/notification.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inspection-kitchen',
  templateUrl: './inspection-kitchen.component.html',
  styleUrls: ['./inspection-kitchen.component.scss']
})
export class InspectionKitchenComponent implements OnInit {

  @Input() kitchenSectionDetails;
  @Input() reportId;
  kitchenForm: FormGroup;
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
    this.kitchenForm = this.formBuilder.group({
      
      name: [''],
      type: [''],
      subtype: [''], // new attribute
      // IN
      conditionIn: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        wallTrimCode: [''],
        wallTrimCmnts: [''],
        floorCmnts: [''],
        floorCode: [''],
        counterTopCmnts: [''],
        counterTopCode: [''],
        cabnetsAndDoorsCmnts: [''],
        cabnetsAndDoorsCode: [''],
        stoveAndStoveTopCmnts: [''],
        stoveAndStoveTopCode: [''],
        ovenCmnts: [''],
        ovenCode: [''],
        exhaustHoodAndFanCmnts: [''],
        exhaustHoodAndFanCode: [''],
        tapSinkCmnts: [''],
        tapSinkCode: [''],
        frigeSelvesCmnts: [''],
        frigeSelvesCode: [''],
        frigeFreezerCmnts: [''],
        frigeFreezerCode: [''],
        frigeExteriorCmnts: [''],
        frigeExteriorCode: [''],
        closetsCode: [''],
        closetsCmnts: [''],
        dishWasherCmnts: [''],
        dishWasherCode: [''],
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
        floorCmnts: [''],
        floorCode: [''],
        counterTopCmnts: [''],
        counterTopCode: [''],
        cabnetsAndDoorsCmnts: [''],
        cabnetsAndDoorsCode: [''],
        stoveAndStoveTopCmnts: [''],
        stoveAndStoveTopCode: [''],
        ovenCmnts: [''],
        ovenCode: [''],
        exhaustHoodAndFanCmnts: [''],
        exhaustHoodAndFanCode: [''],
        tapSinkCmnts: [''],
        tapSinkCode: [''],
        frigeSelvesCmnts: [''],
        frigeSelvesCode: [''],
        frigeFreezerCmnts: [''],
        frigeFreezerCode: [''],
        frigeExteriorCmnts: [''],
        frigeExteriorCode: [''],
        closetsCode: [''],
        closetsCmnts: [''],
        dishWasherCmnts: [''],
        dishWasherCode: [''],
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

    this.kitchenSectionDetails.forEach(element => {
        this.kitchenForm.get('name').setValue(element.payload.doc.data().name);
        this.kitchenForm.get('subtype').setValue(element.payload.doc.data().subtype);
        // this.kitchenForm.get('type').disable(element.paayload.doc().data().type);
      // Move In data
      this.kitchenForm.get('conditionIn').get('cellingCmnts').setValue(element.payload.doc.data().conditionIn.cellingCmnts);
      this.kitchenForm.get('conditionIn').get('closetsCmnts').setValue(element.payload.doc.data().conditionIn.closetsCmnts);
      this.kitchenForm.get('conditionIn').get('closetsCode').setValue(element.payload.doc.data().conditionIn.closetsCode);
      this.kitchenForm.get('conditionIn').get('cellingCode').setValue(element.payload.doc.data().conditionIn.cellingCode);
      this.kitchenForm.get('conditionIn').get('electricCmnts').setValue(element.payload.doc.data().conditionIn.electricCmnts);
      this.kitchenForm.get('conditionIn').get('electricCode').setValue(element.payload.doc.data().conditionIn.electricCode);
      this.kitchenForm.get('conditionIn').get('floorCode').setValue(element.payload.doc.data().conditionIn.floorCode);
      this.kitchenForm.get('conditionIn').get('floorCmnts').setValue(element.payload.doc.data().conditionIn.floorCmnts);
      this.kitchenForm.get('conditionIn').get('lightingCmnts').setValue(element.payload.doc.data().conditionIn.lightingCmnts);
      this.kitchenForm.get('conditionIn').get('lightingCode').setValue(element.payload.doc.data().conditionIn.lightingCode);
      this.kitchenForm.get('conditionIn').get('windowsCmnts').setValue(element.payload.doc.data().conditionIn.windowsCmnts);
      this.kitchenForm.get('conditionIn').get('windowsCode').setValue(element.payload.doc.data().conditionIn.windowsCode);
      this.kitchenForm.get('conditionIn').get('wallTrimCode').setValue(element.payload.doc.data().conditionIn.wallTrimCode);
      this.kitchenForm.get('conditionIn').get('wallTrimCmnts').setValue(element.payload.doc.data().conditionIn.wallTrimCmnts);
      this.kitchenForm.get('conditionIn').get('counterTopCode').setValue(element.payload.doc.data().conditionIn.counterTopCode);
      this.kitchenForm.get('conditionIn').get('counterTopCmnts').setValue(element.payload.doc.data().conditionIn.counterTopCmnts);
      this.kitchenForm.get('conditionIn').get('cabnetsAndDoorsCode').setValue(element.payload.doc.data().conditionIn.cabnetsAndDoorsCode);
      this.kitchenForm.get('conditionIn').get('cabnetsAndDoorsCmnts').setValue(element.payload.doc.data().conditionIn.cabnetsAndDoorsCmnts);
      this.kitchenForm.get('conditionIn').get('stoveAndStoveTopCmnts').setValue(element.payload.doc.data().conditionIn.stoveAndStoveTopCmnts);
      this.kitchenForm.get('conditionIn').get('stoveAndStoveTopCode').setValue(element.payload.doc.data().conditionIn.stoveAndStoveTopCode);
      this.kitchenForm.get('conditionIn').get('ovenCode').setValue(element.payload.doc.data().conditionIn.ovenCode);
      this.kitchenForm.get('conditionIn').get('ovenCmnts').setValue(element.payload.doc.data().conditionIn.ovenCmnts);
      this.kitchenForm.get('conditionIn').get('exhaustHoodAndFanCode').setValue(element.payload.doc.data().conditionIn.exhaustHoodAndFanCode);
      this.kitchenForm.get('conditionIn').get('exhaustHoodAndFanCmnts').setValue(element.payload.doc.data().conditionIn.exhaustHoodAndFanCmnts);
      this.kitchenForm.get('conditionIn').get('frigeSelvesCode').setValue(element.payload.doc.data().conditionIn.frigeSelvesCode);
      this.kitchenForm.get('conditionIn').get('frigeSelvesCmnts').setValue(element.payload.doc.data().conditionIn.frigeSelvesCmnts);
      this.kitchenForm.get('conditionIn').get('tapSinkCode').setValue(element.payload.doc.data().conditionIn.tapSinkCode);
      this.kitchenForm.get('conditionIn').get('tapSinkCmnts').setValue(element.payload.doc.data().conditionIn.tapSinkCmnts);      
      this.kitchenForm.get('conditionIn').get('frigeFreezerCode').setValue(element.payload.doc.data().conditionIn.frigeFreezerCode);
      this.kitchenForm.get('conditionIn').get('frigeFreezerCmnts').setValue(element.payload.doc.data().conditionIn.frigeFreezerCmnts);
      this.kitchenForm.get('conditionIn').get('frigeExteriorCode').setValue(element.payload.doc.data().conditionIn.frigeExteriorCode);
      this.kitchenForm.get('conditionIn').get('frigeExteriorCmnts').setValue(element.payload.doc.data().conditionIn.frigeExteriorCmnts)
      this.kitchenForm.get('conditionIn').get('dishWasherCode').setValue(element.payload.doc.data().conditionIn.dishWasherCode);
      this.kitchenForm.get('conditionIn').get('electricCmnts').setValue(element.payload.doc.data().conditionIn.electricCmnts);
      
      // Move Out data
      this.kitchenForm.get('conditionOut').get('cellingCmnts').setValue(element.payload.doc.data().conditionOut.cellingCmnts);
      this.kitchenForm.get('conditionOut').get('closetsCmnts').setValue(element.payload.doc.data().conditionOut.closetsCmnts);
      this.kitchenForm.get('conditionOut').get('closetsCode').setValue(element.payload.doc.data().conditionOut.closetsCode);
      this.kitchenForm.get('conditionOut').get('cellingCode').setValue(element.payload.doc.data().conditionOut.cellingCode);
      this.kitchenForm.get('conditionOut').get('electricCmnts').setValue(element.payload.doc.data().conditionOut.electricCmnts);
      this.kitchenForm.get('conditionOut').get('electricCode').setValue(element.payload.doc.data().conditionOut.electricCode);
      this.kitchenForm.get('conditionOut').get('floorCode').setValue(element.payload.doc.data().conditionOut.floorCode);
      this.kitchenForm.get('conditionOut').get('floorCmnts').setValue(element.payload.doc.data().conditionOut.floorCmnts);
      this.kitchenForm.get('conditionOut').get('lightingCmnts').setValue(element.payload.doc.data().conditionOut.lightingCmnts);
      this.kitchenForm.get('conditionOut').get('lightingCode').setValue(element.payload.doc.data().conditionOut.lightingCode);
      this.kitchenForm.get('conditionOut').get('windowsCmnts').setValue(element.payload.doc.data().conditionOut.windowsCmnts);
      this.kitchenForm.get('conditionOut').get('windowsCode').setValue(element.payload.doc.data().conditionOut.windowsCode);
      this.kitchenForm.get('conditionOut').get('wallTrimCode').setValue(element.payload.doc.data().conditionOut.wallTrimCode);
      this.kitchenForm.get('conditionOut').get('wallTrimCmnts').setValue(element.payload.doc.data().conditionOut.wallTrimCmnts);
      this.kitchenForm.get('conditionOut').get('counterTopCode').setValue(element.payload.doc.data().conditionOut.counterTopCode);
      this.kitchenForm.get('conditionOut').get('counterTopCmnts').setValue(element.payload.doc.data().conditionOut.counterTopCmnts);
      this.kitchenForm.get('conditionOut').get('cabnetsAndDoorsCode').setValue(element.payload.doc.data().conditionOut.cabnetsAndDoorsCode);
      this.kitchenForm.get('conditionOut').get('cabnetsAndDoorsCmnts').setValue(element.payload.doc.data().conditionOut.cabnetsAndDoorsCmnts);
      this.kitchenForm.get('conditionOut').get('stoveAndStoveTopCmnts').setValue(element.payload.doc.data().conditionOut.stoveAndStoveTopCmnts);
      this.kitchenForm.get('conditionOut').get('stoveAndStoveTopCode').setValue(element.payload.doc.data().conditionOut.stoveAndStoveTopCode);
      this.kitchenForm.get('conditionOut').get('ovenCode').setValue(element.payload.doc.data().conditionOut.ovenCode);
      this.kitchenForm.get('conditionOut').get('ovenCmnts').setValue(element.payload.doc.data().conditionOut.ovenCmnts);
      this.kitchenForm.get('conditionOut').get('exhaustHoodAndFanCode').setValue(element.payload.doc.data().conditionOut.exhaustHoodAndFanCode);
      this.kitchenForm.get('conditionOut').get('exhaustHoodAndFanCmnts').setValue(element.payload.doc.data().conditionOut.exhaustHoodAndFanCmnts);
      this.kitchenForm.get('conditionOut').get('frigeSelvesCode').setValue(element.payload.doc.data().conditionOut.frigeSelvesCode);
      this.kitchenForm.get('conditionOut').get('frigeSelvesCmnts').setValue(element.payload.doc.data().conditionOut.frigeSelvesCmnts);
      this.kitchenForm.get('conditionOut').get('tapSinkCode').setValue(element.payload.doc.data().conditionOut.tapSinkCode);
      this.kitchenForm.get('conditionOut').get('tapSinkCmnts').setValue(element.payload.doc.data().conditionOut.tapSinkCmnts);      
      this.kitchenForm.get('conditionOut').get('frigeFreezerCode').setValue(element.payload.doc.data().conditionOut.frigeFreezerCode);
      this.kitchenForm.get('conditionOut').get('frigeFreezerCmnts').setValue(element.payload.doc.data().conditionOut.frigeFreezerCmnts);
      this.kitchenForm.get('conditionOut').get('frigeExteriorCode').setValue(element.payload.doc.data().conditionOut.frigeExteriorCode);
      this.kitchenForm.get('conditionOut').get('frigeExteriorCmnts').setValue(element.payload.doc.data().conditionOut.frigeExteriorCmnts)
      this.kitchenForm.get('conditionOut').get('dishWasherCode').setValue(element.payload.doc.data().conditionOut.dishWasherCode);
      this.kitchenForm.get('conditionOut').get('electricCmnts').setValue(element.payload.doc.data().conditionOut.electricCmnts);

      this.sectionId = element.payload.doc.id;
      console.log('sec id', element.payload.doc.id);
      console.log('sec id to password', element.payload.doc.id);
      console.log('report id', this.reportId);
    });

    
  }

  // Update section
  submit() { 
    this.kitchenForm.get('type').setValue('Kitchen');
    this.kitchenForm.get('subtype').setValue(this.kitchenForm.value.subtype);
    console.log('sec', this.kitchenForm.value);
    // this.router.navigate(['/home/addsection']);
    this.dataService.updateSection(this.reportId, this.sectionId, this.kitchenForm.value)
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
