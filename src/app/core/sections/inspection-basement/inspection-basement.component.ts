import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inspection-basement',
  templateUrl: './inspection-basement.component.html',
  styleUrls: ['./inspection-basement.component.scss']
})
export class InspectionBasementComponent implements OnInit {

  @Input() basementSectionDetails;
  @Input() reportId;
  basementForm: FormGroup;
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
    this.basementForm = this.formBuilder.group({
      
      name: [''],
      type: [''],
      // IN
      conditionIn: this.formBuilder.group({
        stairWayCode: [''],
        stairWayCmnts: [''],
        wallAndCarpetCode: [''],
        wallAndCarpetCmnts: [''],
        furnaceWaterPlumbingCode: [''],
        furnaceWaterPlumbingCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],        
        lightingCmnts: [''],
        lightingCode: [''],        
        windowsCmnts: [''],
        windowsCode: ['']
      }),
      //- OUT 

      conditionOut: this.formBuilder.group({
        stairWayCode: [''],
        stairWayCmnts: [''],
        wallAndCarpetCode: [''],
        wallAndCarpetCmnts: [''],
        furnaceWaterPlumbingCode: [''],
        furnaceWaterPlumbingCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],        
        lightingCmnts: [''],
        lightingCode: [''],        
        windowsCmnts: [''],
        windowsCode: ['']
      })

    });

    this.basementSectionDetails.forEach(element => {
        this.basementForm.get('name').setValue(element.payload.doc.data().name);
        // this.basementForm.get('type').disable(element.paayload.doc().data().type);
      // Move In data
      this.basementForm.get('conditionIn').get('stairWayCode').setValue(element.payload.doc.data().conditionIn.stairWayCode);
      this.basementForm.get('conditionIn').get('wallAndCarpetCmnts').setValue(element.payload.doc.data().conditionIn.wallAndCarpetCmnts);
      this.basementForm.get('conditionIn').get('wallAndCarpetCode').setValue(element.payload.doc.data().conditionIn.wallAndCarpetCode);
      this.basementForm.get('conditionIn').get('stairWayCmnts').setValue(element.payload.doc.data().conditionIn.stairWayCmnts);
      this.basementForm.get('conditionIn').get('electricCmnts').setValue(element.payload.doc.data().conditionIn.electricCmnts);
      this.basementForm.get('conditionIn').get('electricCode').setValue(element.payload.doc.data().conditionIn.electricCode);
      this.basementForm.get('conditionIn').get('furnaceWaterPlumbingCode').setValue(element.payload.doc.data().conditionIn.furnaceWaterPlumbingCode);
      this.basementForm.get('conditionIn').get('furnaceWaterPlumbingCmnts').setValue(element.payload.doc.data().conditionIn.furnaceWaterPlumbingCmnts);
      this.basementForm.get('conditionIn').get('lightingCmnts').setValue(element.payload.doc.data().conditionIn.lightingCmnts);
      this.basementForm.get('conditionIn').get('lightingCode').setValue(element.payload.doc.data().conditionIn.lightingCode);
      this.basementForm.get('conditionIn').get('windowsCmnts').setValue(element.payload.doc.data().conditionIn.windowsCmnts);
      this.basementForm.get('conditionIn').get('windowsCode').setValue(element.payload.doc.data().conditionIn.windowsCode);
      
      
      // Move Out data
      
      this.basementForm.get('conditionOut').get('stairWayCode').setValue(element.payload.doc.data().conditionOut.stairWayCode);
      this.basementForm.get('conditionOut').get('wallAndCarpetCmnts').setValue(element.payload.doc.data().conditionOut.wallAndCarpetCmnts);
      this.basementForm.get('conditionOut').get('wallAndCarpetCode').setValue(element.payload.doc.data().conditionOut.wallAndCarpetCode);
      this.basementForm.get('conditionOut').get('stairWayCmnts').setValue(element.payload.doc.data().conditionOut.stairWayCmnts);
      this.basementForm.get('conditionOut').get('electricCmnts').setValue(element.payload.doc.data().conditionOut.electricCmnts);
      this.basementForm.get('conditionOut').get('electricCode').setValue(element.payload.doc.data().conditionOut.electricCode);
      this.basementForm.get('conditionOut').get('furnaceWaterPlumbingCode').setValue(element.payload.doc.data().conditionOut.furnaceWaterPlumbingCode);
      this.basementForm.get('conditionOut').get('furnaceWaterPlumbingCmnts').setValue(element.payload.doc.data().conditionOut.furnaceWaterPlumbingCmnts);
      this.basementForm.get('conditionOut').get('lightingCmnts').setValue(element.payload.doc.data().conditionOut.lightingCmnts);
      this.basementForm.get('conditionOut').get('lightingCode').setValue(element.payload.doc.data().conditionOut.lightingCode);
      this.basementForm.get('conditionOut').get('windowsCmnts').setValue(element.payload.doc.data().conditionOut.windowsCmnts);
      this.basementForm.get('conditionOut').get('windowsCode').setValue(element.payload.doc.data().conditionOut.windowsCode);
      

      this.sectionId = element.payload.doc.id;
      console.log('sec id', element.payload.doc.id);
      console.log('sec id to password', element.payload.doc.id);
      console.log('report id', this.reportId);
    });

    
  }

  // Update section
  submit() { 
    this.basementForm.get('type').setValue('Kitchen');
    console.log('sec', this.basementForm.value);
    // this.router.navigate(['/home/addsection']);
    this.dataService.updateSection(this.reportId, this.sectionId, this.basementForm.value)
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
