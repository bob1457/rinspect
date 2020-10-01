import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
<<<<<<< HEAD
=======
import { DataService } from '../services/data.service';
>>>>>>> dev

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent implements OnInit {

  addForm: FormGroup;
<<<<<<< HEAD

  constructor(private router: Router,
              private formBuilder: FormBuilder) { }
=======
  final = false;
  notAgree = '';
  notAgree1 = '';
  agreeOk = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private dataService: DataService) { }
>>>>>>> dev

  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
<<<<<<< HEAD
      title: ['', Validators.required]
=======
      // title: ['', Validators.required],
      active: [true],
      agentName: [''],
      title: [''],
      moveInInspectDate: [''],
      moveOutDate: [''],
      possesionDate: [''],
      moveOutInspectDate: [''],
      landlord: this.formBuilder.group({
        legalName: [''],
        address: this.formBuilder.group({
          unit: [''],
          street: [''],
          city: [''],
          province: ['BC'],
          postcode: ['']
        })
      }),
      tenant: this.formBuilder.group({
        legalName: [''],
        address: this.formBuilder.group({
          unit: [''],
          street: [''],
          city: [''],
          province: [''],
          postcode: ['BC']
        })
      }),
      created: [''],
      updated: ['']
>>>>>>> dev
    });
  }

  Created() {
<<<<<<< HEAD
    this.router.navigateByUrl('/home/report-details')
  }

  submit() {
    this.router.navigateByUrl('/home/report-details')
=======
    // this.router.navigateByUrl('/home/report-details')
  }

  clicked(event) {
    console.log(event.checked);
    this.final = event.checked;
  }

  agreeToDeposit(event) {
    this.agreeOk = event.checked;
  }

  onChange(event) {
    console.log(event);
    this.notAgree = event.value;
  }

  onChange1(event) {
    console.log(event);
    this.notAgree1 = event.value;
  }

  submit() {
    debugger;
    // this.router.navigateByUrl('/home/report-details');
    // this.router.navigate(['/home/report-details', 1]);
    this.addForm.patchValue({
      created: new Date(),
      updated: new Date()
    })
    console.log('form data', this.addForm.value);
    this.dataService.createReport(this.addForm.value);
    this.router.navigate(['/home/addsection']); // after saving the new report, get the report id from response
>>>>>>> dev
  }

}
