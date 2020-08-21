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
  final = false;
  notAgree = '';

  constructor(private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  Created() {
    // this.router.navigateByUrl('/home/report-details')
  }

  clicked(event) {
    console.log(event.checked);
    this.final = event.checked;
  }

  onChange(event) {
    console.log(event);
    this.notAgree = event.value;
  }

  submit() {
    // this.router.navigateByUrl('/home/report-details');
    this.router.navigate(['/home/report-details', 1]);
  }

}
