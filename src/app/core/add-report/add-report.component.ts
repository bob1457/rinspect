import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

import { DataService } from '../services/data.service';

import { UserService } from 'src/app/user/services/user.service';
import { BackendService } from '../services/backend.service';


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
  leaseList;
  leaseDetails;
  tenantFullName;
  landlordFullName;
  selectLease = false;


  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private backendService: BackendService,
              private dataService: DataService) { }

  // leases: any[] = [
  //   { value: '1', viewValue: 'Steak' },
  //   { value: '2', viewValue: 'Pizza' },
  //   { value: '3', viewValue: 'Tacos' },
  // ];

  ngOnInit(): void {

    this.userService.getCurrentUser()
      .subscribe(res => {
        this.user = res;
      });

    this.getLeaseList();

    this.addForm = this.formBuilder.group({
      // title: ['', Validators.required],
      leaseId: [0],
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

  onSelectChange(event) {
    console.log(event);
    return this.backendService.getLeaseDetails(event)
      .subscribe(details => {
        this.leaseDetails = details;

        console.log('details', this.leaseDetails);
        this.landlordFullName = this.leaseDetails.owners[0].firstName + ' ' + this.leaseDetails.owners[0].lastName;
        this.tenantFullName = this.leaseDetails.tenants[0].firstName + ' ' + this.leaseDetails.tenants[0].lastName;
        console.log('fn', this.tenantFullName);
      });
  }

  Created() {
    // this.router.navigateByUrl('/home/report-details')
  }

  getLeaseList(){
    return this.backendService.getAllLeaseList()
      .subscribe(list => {
          this.leaseList = list;
          console.log('leases', this.leaseList);
        }
      );
  }

  clicked(event) {
    // console.log(event.checked);
    this.final = event.checked;
  }

  agreeToDeposit(event) {
    this.agreeOk = event.checked;
  }

  onChange(event) {
    // console.log(event);
    this.notAgree = event.value;
  }

  onChange1(event) {
    // console.log(event);
    this.notAgree1 = event.value;
  }

  onSelect(event) {
    // console.log('checked', event.checked);
    this.selectLease = event.checked;
  }

  submit() {
    debugger;
    // this.router.navigateByUrl('/home/report-details');
    // this.router.navigate(['/home/report-details', 1]);
    const uid = this.user.uid;
    // console.log('uid in report', this.user.uid);

    if (this.leaseDetails) {
      this.addForm.patchValue({
      leaseId: this.leaseDetails.leaseId,
      reportOwnerId: uid,
      created: new Date(),
      updated: new Date()
    });
    } else {
      this.addForm.patchValue({
        leaseId: 0,
        reportOwnerId: uid,
        created: new Date(),
        updated: new Date()
      });
    }

    console.log('form data', this.addForm.value);
    this.dataService.createReport(this.addForm.value)
        .then( doc => {
          console.log('new report id', doc.id);
          this.router.navigate(['/home/report-details/', doc.id]); // Improvement: check if online then use differnet if offline.
        });
    // this.router.navigate(['/home/addsection']); // after saving the new report, get the report id from response
    this.router.navigate(['/home/report']); // ${id}

  }

}
