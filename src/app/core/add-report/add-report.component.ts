import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

import { DataService } from '../services/data.service';

import { UserService } from 'src/app/user/services/user.service';


@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent implements OnInit {

  addForm: FormGroup;
  final = false;
  notAgree = '';
  notAgree1 = '';
  agreeOk = false;
  user;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private dataService: DataService) { }

  ngOnInit(): void {

    this.userService.getCurrentUser()
        .subscribe(res => {
          this.user = res;
        })

    this.addForm = this.formBuilder.group({
      // title: ['', Validators.required],
      active: [true],
      agentName: [''],
      title: [''],
      completed: [false],
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
      reportOwnerId: [''],
      created: [''],
      updated: ['']
    });
  }

  Created() {
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
    var uid = this.user.uid;
    // console.log('uid in report', this.user.uid);

    this.addForm.patchValue({
      reportOwnerId: uid,
      created: new Date(),
      updated: new Date()
    })
    console.log('form data', this.addForm.value);
    this.dataService.createReport(this.addForm.value)
        .then( doc => {
          console.log('new report id', doc.id);
          this.router.navigate(['/home/report-details/', doc.id]);
        });
    // this.router.navigate(['/home/addsection']); // after saving the new report, get the report id from response
    this.router.navigate(['/home/report']); //${id}

  }

}
