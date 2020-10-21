import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inspection-entry',
  templateUrl: './inspection-entry.component.html',
  styleUrls: ['./inspection-entry.component.scss']
})
export class InspectionEntryComponent implements OnInit {

  @Input() entrySectionDetails;
  entryForm: FormGroup;

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
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // console.log('section', this.entrySectionDetails);
    this.entryForm = this.formBuilder.group({
      // Temp
      // code: ['G'],
      // comments: ['N/A'],
      name: [''],
      type: [''],
      // IN
      cellingCmnts_in: [''],
      cellingCode_in: [''],
      closetsCode_in: [''],
      closetsCmnts_in: [''],
      electricCmnts_in: [''],
      electricCode_in: [''],
      floorCmnts_in: [''],
      floorCode_in: [''],
      lightingCmnts_in: [''],
      lightingCode_in: [''],
      wallTrimCmnts_in: [''],
      wallTrimCode_in: [''],
      windowsCmnts_in: [''],
      windowsCode_in: [''],

      //- OUT
      cellingCmnts_out: [''],
      cellingCode_out: [''],
      closetsCode_out: [''],
      closetsCmnts_out: [''],      
      electricCmnts_out: [''],
      electricCode_out: [''],
      floorCmnts_out: [''],
      floorCode_out: [''],
      lightingCmnts_out: [''],
      lightingCode_out: [''],
      wallTrimCmnts_out: [''],
      wallTrimCode_out: [''],
      windowsCmnts_out: [''],
      windowsCode_out: ['']

    });

    this.entrySectionDetails.forEach(element => {
        this.entryForm.get('name').setValue(element.payload.doc.data().name);
      // Move In data
      this.entryForm.get('cellingCmnts_in').setValue(element.payload.doc.data().conditionIn.cellingCmnts);
      this.entryForm.get('closetsCmnts_in').setValue(element.payload.doc.data().conditionIn.closetsCmnts);
      this.entryForm.get('closetsCode_in').setValue(element.payload.doc.data().conditionIn.closetsCode);
      this.entryForm.get('cellingCode_in').setValue(element.payload.doc.data().conditionIn.cellingCode);

      this.entryForm.get('electricCmnts_in').setValue(element.payload.doc.data().conditionIn.electricCmnts);
      this.entryForm.get('electricCode_in').setValue(element.payload.doc.data().conditionIn.electricCode);
      this.entryForm.get('floorCode_in').setValue(element.payload.doc.data().conditionIn.floorCode);
      this.entryForm.get('floorCmnts_in').setValue(element.payload.doc.data().conditionIn.floorCmnts);
      this.entryForm.get('lightingCmnts_in').setValue(element.payload.doc.data().conditionIn.lightingCmnts);
      this.entryForm.get('lightingCode_in').setValue(element.payload.doc.data().conditionIn.lightingCode);
      this.entryForm.get('windowsCmnts_in').setValue(element.payload.doc.data().conditionIn.windowsCmnts);
      this.entryForm.get('windowsCode_in').setValue(element.payload.doc.data().conditionIn.windowsCode);
      this.entryForm.get('wallTrimCode_in').setValue(element.payload.doc.data().conditionIn.wallTrimCode);
      this.entryForm.get('wallTrimCmnts_in').setValue(element.payload.doc.data().conditionIn.wallTrimCmnts);

      // Move Out data
      this.entryForm.get('cellingCmnts_out').setValue(element.payload.doc.data().conditionIn.cellingCmnts);
      this.entryForm.get('closetsCmnts_out').setValue(element.payload.doc.data().conditionIn.closetsCmnts);
      this.entryForm.get('closetsCode_out').setValue(element.payload.doc.data().conditionIn.closetsCode);
      this.entryForm.get('cellingCode_out').setValue(element.payload.doc.data().conditionIn.cellingCode);

      this.entryForm.get('electricCmnts_out').setValue(element.payload.doc.data().conditionOut.electricCmnts);
      this.entryForm.get('electricCode_out').setValue(element.payload.doc.data().conditionOut.electricCode);
      this.entryForm.get('floorCode_out').setValue(element.payload.doc.data().conditionOut.floorCode);
      this.entryForm.get('floorCmnts_out').setValue(element.payload.doc.data().conditionOut.floorCmnts);
      this.entryForm.get('lightingCmnts_out').setValue(element.payload.doc.data().conditionOut.lightingCmnts);
      this.entryForm.get('lightingCode_out').setValue(element.payload.doc.data().conditionOut.lightingCode);
      this.entryForm.get('windowsCmnts_out').setValue(element.payload.doc.data().conditionOut.windowsCmnts);
      this.entryForm.get('windowsCode_out').setValue(element.payload.doc.data().conditionOut.windowsCode);
      this.entryForm.get('wallTrimCode_out').setValue(element.payload.doc.data().conditionOut.wallTrimCode);
      this.entryForm.get('wallTrimCmnts_out').setValue(element.payload.doc.data().conditionOut.wallTrimCmnts);

      console.log('sec id', element.payload.doc.id);
    });

    
  }

  submit() {   
    console.log('sec', this.entryForm.value);
    // this.router.navigate(['/home/addsection']);
    this.reloadComponent();
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/home/addsection']);
}

}
