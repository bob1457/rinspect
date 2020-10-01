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

    this.entryForm.get('name').setValue(this.entrySectionDetails[0].name);
    // Move In data
    this.entryForm.get('cellingCmnts_in').setValue(this.entrySectionDetails[0].conditionIn.cellingCmnts);
    this.entryForm.get('closetsCmnts_in').setValue(this.entrySectionDetails[0].conditionIn.closetsCmnts);
    this.entryForm.get('closetsCode_in').setValue(this.entrySectionDetails[0].conditionIn.closetsCode);
    this.entryForm.get('cellingCode_in').setValue(this.entrySectionDetails[0].conditionIn.cellingCode);

    this.entryForm.get('electricCmnts_in').setValue(this.entrySectionDetails[0].conditionIn.electricCmnts);
    this.entryForm.get('electricCode_in').setValue(this.entrySectionDetails[0].conditionIn.electricCode);
    this.entryForm.get('floorCode_in').setValue(this.entrySectionDetails[0].conditionIn.floorCode);
    this.entryForm.get('floorCmnts_in').setValue(this.entrySectionDetails[0].conditionIn.floorCmnts);
    this.entryForm.get('lightingCmnts_in').setValue(this.entrySectionDetails[0].conditionIn.lightingCmnts);
    this.entryForm.get('lightingCode_in').setValue(this.entrySectionDetails[0].conditionIn.lightingCode);
    this.entryForm.get('windowsCmnts_in').setValue(this.entrySectionDetails[0].conditionIn.windowsCmnts);
    this.entryForm.get('windowsCode_in').setValue(this.entrySectionDetails[0].conditionIn.windowsCode);
    this.entryForm.get('wallTrimCode_in').setValue(this.entrySectionDetails[0].conditionIn.wallTrimCode);
    this.entryForm.get('wallTrimCmnts_in').setValue(this.entrySectionDetails[0].conditionIn.wallTrimCmnts);

    // Move Out data
    this.entryForm.get('cellingCmnts_out').setValue(this.entrySectionDetails[0].conditionIn.cellingCmnts);
    this.entryForm.get('closetsCmnts_out').setValue(this.entrySectionDetails[0].conditionIn.closetsCmnts);
    this.entryForm.get('closetsCode_out').setValue(this.entrySectionDetails[0].conditionIn.closetsCode);
    this.entryForm.get('cellingCode_out').setValue(this.entrySectionDetails[0].conditionIn.cellingCode);

    this.entryForm.get('electricCmnts_out').setValue(this.entrySectionDetails[0].conditionOut.electricCmnts);
    this.entryForm.get('electricCode_out').setValue(this.entrySectionDetails[0].conditionOut.electricCode);
    this.entryForm.get('floorCode_out').setValue(this.entrySectionDetails[0].conditionOut.floorCode);
    this.entryForm.get('floorCmnts_out').setValue(this.entrySectionDetails[0].conditionOut.floorCmnts);
    this.entryForm.get('lightingCmnts_out').setValue(this.entrySectionDetails[0].conditionOut.lightingCmnts);
    this.entryForm.get('lightingCode_out').setValue(this.entrySectionDetails[0].conditionOut.lightingCode);
    this.entryForm.get('windowsCmnts_out').setValue(this.entrySectionDetails[0].conditionOut.windowsCmnts);
    this.entryForm.get('windowsCode_out').setValue(this.entrySectionDetails[0].conditionOut.windowsCode);
    this.entryForm.get('wallTrimCode_out').setValue(this.entrySectionDetails[0].conditionOut.wallTrimCode);
    this.entryForm.get('wallTrimCmnts_out').setValue(this.entrySectionDetails[0].conditionOut.wallTrimCmnts);
  }

  submit() {   

    // this.router.navigate(['/home/addsection']);
    this.reloadComponent();
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/home/addsection']);
}

}
