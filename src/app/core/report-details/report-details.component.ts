import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {

  constructor(private router: Router,
              private actRoute: ActivatedRoute,
              private formBuilder: FormBuilder) { 

              }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      console.log(params.get('id'));
    })
  }

}
