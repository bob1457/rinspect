import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-reeport-view',
  templateUrl: './reeport-view.component.html',
  styleUrls: ['./reeport-view.component.scss']
})
export class ReeportViewComponent implements OnInit {

  id: number;
  reportDetails;
  report$: Observable<any>;

  @ViewChild('pdfdoc', {static: false}) pdfdoc: ElementRef;

  constructor(
    private router: Router,
    private location: Location,
    private actRoute: ActivatedRoute
  ) {
    this.id = this.actRoute.snapshot.params.id;
    console.log('rept_ID',this.id);
  }

  ngOnInit(): void {
  }

  back() {
    this.location.back();
  }


  download() {
    // debugger;

    const element = document.getElementById('pdfdoc');

    const options = {
      margin:       0.15,
      filename:     'Inspection_Report', // this.contract.managementContractTitle + '_' + timestamp + '_contract.pdf',
      image:        { type: 'jpeg', quality: 0.99 },
      // pagebreak:    { mode: '', before: '#page2el'},
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();

  }

}
