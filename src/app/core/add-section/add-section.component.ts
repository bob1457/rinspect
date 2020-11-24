import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss']
})
export class AddSectionComponent implements OnInit {

  type = '';
  id;
  report;

  constructor(private actRoute: ActivatedRoute,
              private dataService: DataService) { 
    this.actRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(params.get('id'));
    });
  }

  ngOnInit(): void {
    this.dataService.getReportDetails(this.id)
        .subscribe(res => {
          if(res){
            this.report = res;
          }
          

        })
  }

}
