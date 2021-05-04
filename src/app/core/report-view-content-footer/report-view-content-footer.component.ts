import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-view-content-footer',
  templateUrl: './report-view-content-footer.component.html',
  styleUrls: ['./report-view-content-footer.component.scss']
})
export class ReportViewContentFooterComponent implements OnInit {

  @Input() report;

  constructor() { }

  ngOnInit(): void {
  }

}
