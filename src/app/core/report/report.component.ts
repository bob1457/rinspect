import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(public dataService: DataService,
              private userService: UserService) { }

  reports;
  user;
  userId;

  ngOnInit(): void {
    // debugger;
    // Get current user
    this.userService.getCurrentUser() 
                    .subscribe( res => {
                      if(res) {
                        this.userId = res.uid;
                        console.log('current uid in report', this.userId);
                        this.dataService.getAllReportsByUser(this.userId)
                          .subscribe( rpts => {
                              this.reports = rpts;
                          })
                      }
                      
                    })   

    
    // debugger;
    // this.dataService.getAllReports()
    //     .subscribe(res => {
    //       // console.log(res);
    //       this.reports = res;
    //       console.log(this.reports);
    //     });
  }

}
