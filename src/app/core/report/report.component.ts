import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(public dataService: DataService) { }

  reports;

  ngOnInit(): void {
    // debugger;
    this.dataService.getAllReports()
        .subscribe(res => {
          // console.log(res);
          this.reports = res;
          console.log(this.reports);
        });
  }

}
