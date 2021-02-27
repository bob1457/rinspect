import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-section-entry',
  templateUrl: './add-section-entry.component.html',
  styleUrls: ['./add-section-entry.component.scss']
})
export class AddSectionEntryComponent implements OnInit {

  floatLabelControl = new FormControl('auto');

  @Input() rptId;

  addMore = false;

  // newly added attributes
  entryType = 'MainEntry';
  // main = '';
  // secondary = '';
  mainEntryExists = false;
  secEntryExists = false;

  alreadyAdded = false

  entryForm: FormGroup;

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
              private formBuilder: FormBuilder,
              private dataServie: DataService) { }

  ngOnInit(): void {

    let sectionSubType = {
      'M':'MainEntry',
      'S':'SecondaryEntry'
    }

    for (let [key, value] of Object.entries(sectionSubType)) {
      console.log('subtype of section---', value);

      this.dataServie.getReportSectionBySubType(this.rptId, value)
          .subscribe( res => {
            if(res.length > 0) {
              // key = key + "Y";
              switch (key) {
                case 'M':
                  this.mainEntryExists = true;
                  break;
                case 'S':
                  this.secEntryExists = true;
                  break;
                default:
                  break;
              }
              // console.log('status:', key);
              // console.log(value + ' exists');
              if( this.mainEntryExists == true && this.secEntryExists == true) {
                this.alreadyAdded = true;
                this.entryForm.disable();
              }

              console.log('status:', this.alreadyAdded);
            } else {
              // key = key + "N";
              switch (key) {
                case 'M':
                  this.mainEntryExists = false;
                  break;
                case 'S':
                  this.secEntryExists = false;
                  break;
                default:
                  break;
              }
              // console.log('status:', key);
              // console.log(value + ' not exists');
            }

          })
    }

    this.entryForm = this.formBuilder.group({
      name: [''],
      type: [''],
      subtype: ['MainEntry'], // new attribute
      // IN
      conditionIn: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        closetsCode: [''],
        closetsCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],
        floorCmnts: [''],
        floorCode: [''],
        lightingCmnts: [''],
        lightingCode: [''],
        wallTrimCmnts: [''],
        wallTrimCode: [''],
        windowsCmnts: [''],
        windowsCode: [''],
        otherCode: [''],
        otherCmnts: ['']
      }),
      //- OUT

      conditionOut: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        closetsCode: [''],
        closetsCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],
        floorCmnts: [''],
        floorCode: [''],
        lightingCmnts: [''],
        lightingCode: [''],
        wallTrimCmnts: [''],
        wallTrimCode: [''],
        windowsCmnts: [''],
        windowsCode: [''],
        otherCode: [''],
        otherCmnts: ['']
      })



    })
  }

  submit() {

    this.entryForm.get('type').setValue('Entry');
    //Check if main entry
    if(this.entryType == 'MainEntry') {
      this.entryForm.get('subtype').setValue('MainEntry');
    }
    else {
      this.entryForm.get('subtype').setValue('SecondaryEntry');
    }

    console.log('add secton form', this.entryForm.value);
    // call service to add section
    console.log(this.rptId);

    this.dataServie.createSection(this.entryForm.value, this.rptId);   // comment out for testing data input

    if (this.addMore) {
      this.reloadComponent();
    }else {
      this.router.navigate(['home/report-details', this.rptId]);
    }
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/home/addSection', this.rptId]);
  }

  clicked(event) {
    this.addMore = event.checked;
    console.log(this.addMore);
  }

  onChange(event) {
    console.log(event);
    this.entryType = event.value;
  }

}
