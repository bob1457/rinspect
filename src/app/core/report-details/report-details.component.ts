import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {

  id;
  report;
  edit = false;

  detailForm: FormGroup;


  constructor(private router: Router,
              private actRoute: ActivatedRoute,
              public dataService: DataService,
              private formBuilder: FormBuilder) {

              }

  ngOnInit(): void {

    this.detailForm = this.formBuilder.group({
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
          province: [''],
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
          postcode: ['']
        })
      })
    });


    this.actRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(params.get('id'));
    });

    this.dataService.getReportDetails(this.id)
        .subscribe(res => {
          this.report = res;
          console.log(res);

          // Bind data to form filed
          this.detailForm.get('title').setValue(this.report.title);
          this.detailForm.get('landlord').get('legalName').setValue(this.report.landlord.legalName);
          this.detailForm.get('landlord').get('address').get('street').setValue(this.report.landlord.address.street);
          this.detailForm.get('landlord').get('address').get('unit').setValue(this.report.landlord.address.unit);
          this.detailForm.get('landlord').get('address').get('city').setValue(this.report.landlord.address.city);
          this.detailForm.get('landlord').get('address').get('province').setValue(this.report.landlord.address.province);
          this.detailForm.get('landlord').get('address').get('postcode').setValue(this.report.landlord.address.postcode);
          this.detailForm.get('tenant').get('legalName').setValue(this.report.tenant.legalName);
          this.detailForm.get('tenant').get('address').get('street').setValue(this.report.tenant.address.street);
          this.detailForm.get('tenant').get('address').get('unit').setValue(this.report.tenant.address.unit);
          this.detailForm.get('tenant').get('address').get('city').setValue(this.report.tenant.address.city);
          this.detailForm.get('tenant').get('address').get('province').setValue(this.report.tenant.address.province);
          this.detailForm.get('tenant').get('address').get('postcode').setValue(this.report.tenant.address.postcode);

        });
  }

  submit() {}

  clicked(event) {}

  enableEdit() {
    this.edit = true;
  }

  cancelEdit() {
    this.edit = false;
  }

}
