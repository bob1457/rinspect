import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-view-content-header',
  templateUrl: './report-view-content-header.component.html',
  styleUrls: ['./report-view-content-header.component.scss']
})
export class ReportViewContentHeaderComponent implements OnInit {

  l_firstName;
  l_lastName;
  t_firstName;
  t_lastName;

  pDate;
  convertedPossessionDate;

  @Input() report;

  constructor() { }

  ngOnInit(): void {

    this.l_firstName = this.report.landlord.legalName.split(' ').slice(0, -1).join(' ');
    this.l_lastName = this.report.landlord.legalName.split(' ').slice(-1).join(' ');
    this.t_firstName = this.report.tenant.legalName.split(' ').slice(0, -1).join(' ');
    this.t_lastName = this.report.tenant.legalName.split(' ').slice(-1).join(' ');

    console.log('fn', this.l_firstName);
    console.log('ln', this.l_lastName);
    console.log('rpt in content header', this.report);
  }

}
