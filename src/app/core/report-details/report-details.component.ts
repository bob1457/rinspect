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
      title: [''],
      landlord: this.formBuilder.group({
        legalName: ['']
      }),
      legalName: ['']
    });


    this.actRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(params.get('id'));
    })

    this.dataService.getReportDetails(this.id)
        .subscribe(res => {
          this.report = res;
          console.log(res);
        })
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
