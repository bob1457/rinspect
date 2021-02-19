import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-view-header',
  templateUrl: './report-view-header.component.html',
  styleUrls: ['./report-view-header.component.scss']
})
export class ReportViewHeaderComponent implements OnInit {

  @Input() note = '';

  constructor() { }

  ngOnInit(): void {
  }

}
