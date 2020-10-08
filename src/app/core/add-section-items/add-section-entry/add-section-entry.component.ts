import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-section-entry',
  templateUrl: './add-section-entry.component.html',
  styleUrls: ['./add-section-entry.component.scss']
})
export class AddSectionEntryComponent implements OnInit {

  @Input() rptId;

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
    
    this.entryForm = this.formBuilder.group({
      name: [''],
      type: [''],
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
        windowsCode: ['']
      }) // ,
      //- OUT Not required when the section is first time added

      // conditionOut: this.formBuilder.group({
      //   cellingCmnts: [''],
      //   cellingCode: [''],
      //   closetsCode: [''],
      //   closetsCmnts: [''],      
      //   electricCmnts: [''],
      //   electricCode: [''],
      //   floorCmnts: [''],
      //   floorCode: [''],
      //   lightingCmnts: [''],
      //   lightingCode: [''],
      //   wallTrimCmnts: [''],
      //   wallTrimCode: [''],
      //   windowsCmnts: [''],
      //   windowsCode: ['']
      // })
      
      

    })
  }

  submit() {
    this.entryForm.get('type').setValue('Entry');
    console.log('add secton form', this.entryForm.value);
    // call service to add section
    console.log(this.rptId);
    this.dataServie.createSection(this.entryForm.value, this.rptId);
  }

}
