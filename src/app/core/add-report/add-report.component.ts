import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent implements OnInit {

  addForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  Created() {
    this.router.navigateByUrl('/home/report-details')
  }

  submit() {
    this.router.navigateByUrl('/home/report-details')
  }

}
