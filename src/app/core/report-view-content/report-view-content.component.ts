import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-report-view-content',
  templateUrl: './report-view-content.component.html',
  styleUrls: ['./report-view-content.component.scss']
})
export class ReportViewContentComponent implements OnInit {

  id;
  report;
  sections;

  final = false;
  notAgree = '';
  notAgree1 = '';
  agreeOk = false;

  type = '';

  // All sections
  entrySection;
  kitchenSection;
  livingRoomSection;
  diningRoomSEction;
  stairwellSection;
  bathroomSection;
  bedroomSection;
  exteriorSection;
  utilitySection;
  garbageParkingSection;
  basementSection;
  keyControlSection;
  otherSection;


  constructor(private actRoute: ActivatedRoute,
              public dataService: DataService) {
                this.actRoute.paramMap.subscribe(params => {
                  this.id = params.get('id');
                  console.log('id in view',params.get('id'));
                });
               }

  ngOnInit(): void {

    // Get report details
    this.dataService.getReportDetails(this.id)
        .subscribe(res => {
          this.report = res;
          console.log('rpt', this.report)
        })

    // Get each section   
    
    this.dataService.getReportViewSectionByType(this.id, 'Entry')
        .subscribe( res => {
          res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            this.entrySection = data;
            console.log('section view', this.entrySection);
            return {id, ...data}
          } )
        })
  }

}
