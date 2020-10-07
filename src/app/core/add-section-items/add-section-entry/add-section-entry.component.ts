import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.entryForm = this.formBuilder.group({
      code: ['G'],
      comments: ['N/A']
    })
  }

  submit() {
    console.log('add secton form', this.entryForm.value);
    // call service to add section
    console.log(this.rptId);
  }

}
