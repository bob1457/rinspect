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
      code: ['G'],
      comments: ['N/A'],
      // IN
      cellingCmnts_in: [''],
      cellingCode_in: [''],
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

    // this.detailForm.get('title').setValue(this.report.title);
    // this.detailForm.get('landlord').get('legalName').setValue(this.report.landlord.legalName);
    this.entryForm.get('cellingCmnts_in').setValue(this.entrySectionDetails[0].conditionIn.cellingCmnts);
  }

  submit() {
    console.log('submitted');

    // this.router.navigate(['/home/addsection']);
    this.reloadComponent();
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/home/addsection']);
}

}
