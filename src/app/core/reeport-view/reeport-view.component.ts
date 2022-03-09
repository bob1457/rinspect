import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import * as html2pdf from 'html2pdf.js';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BackendService } from '../services/backend.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-reeport-view',
  templateUrl: './reeport-view.component.html',
  styleUrls: ['./reeport-view.component.scss']
})
export class ReeportViewComponent implements OnInit {

  id: number;
  // reportDetails;
  report;
  report$: Observable<any>;
  saving = false;
  done = false;
  uploadForm: FormGroup;

  possessionDate;
  moveOutDate;
  moveInInsDate;
  moveOutInsDaste;

  @ViewChild('pdfdoc', {static: false}) pdfdoc: ElementRef;

  constructor(
    private router: Router,
    private location: Location,
    private actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    public dataService: DataService,
    private backendService: BackendService
  ) {
    this.id = this.actRoute.snapshot.params.id;
    console.log('rept_ID',this.id);
  }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      leaseId: [0],
      encodedFile: ['']
    });

    this.dataService.getReportDetails(this.id)
      .subscribe(res => {
        this.report = res;
        // this.possessionDate = this.report.possesionDate.toDate().getDate() + "          " + this.report.possesionDate.toDate().getMonth() +  "             " +  this.report.possesionDate.toDate().getFullYear();
        this.possessionDate = "  " + this.getDate(this.report.possesionDate) + "       " + this.getMonth(this.report.possesionDate) + "        " + this.report.possesionDate.toDate().getFullYear();

        if (this.report.moveOutInspectDate) {
          this.moveOutInsDaste = "  " + this.getDate(this.report.moveOutInspectDate) + "       " + this.getMonth(this.report.moveOutInspectDate) + "        " + this.report.moveOutInspectDate.toDate().getFullYear();
        } else {
          this.moveOutInsDaste = "";
        }

        this.moveInInsDate = "  " + this.getDate(this.report.moveInInspectDate) + "       " + this.getMonth(this.report.moveInInspectDate) + "        " + this.report.moveInInspectDate.toDate().getFullYear();

        if (this.report.moveOutDate) {
          this.moveOutDate = "  " + this.getDate(this.report.moveOutDate) + "       " + this.getMonth(this.report.moveOutDate) + "        " + this.report.moveOutDate.toDate().getFullYear();
        } else {
          this.moveOutDate = '';
        }
        console.log('rpt in report view', this.report);
        console.log('possesiion date', this.possessionDate);
      });
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

  save() {
    debugger;
    this.saving = true;

    const element = document.getElementById('pdfdoc');

    const options = {
      margin: 0.2,
      filename: 'Inpsection_Report', // this.contract.managementContractTitle + '_' + timestamp + '_contract.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).output().then(pdf => {
      const fileData = btoa(pdf); // generate base64 string
      console.log('btoa file', fileData);

      // this.saving = true;
      this.upLoadFile(fileData);
      // debugger;
      // this.httpClient.post<any>(this.serverUrl, fileData)
      //   .subscribe(res => console.log('response', res));

    });
  }

  private upLoadFile(file: any) {
    debugger;
    this.uploadForm.get('encodedFile').setValue(file);
    this.uploadForm.patchValue({
      // leaseId: this.lease.id
      leaseId: Number(this.report.leaseId)
    });

    // const formData = new FormData();

    // formData.append('file', this.uploadForm.get('document').value);
    console.log('upload form', this.uploadForm.value);

    this.backendService.saveReport(this.uploadForm.value).subscribe(
      res => {
        this.saving = false;
        this.done = true;
        setTimeout(() => { this.done = false; }, 2000);
        console.log('response', res);
      });

  }

  private getDate(date: any): string {
    const d = date.toDate().getDate().toString();
    const formatedDate = d.length < 2 ? '0' + d : d;

    return formatedDate;
  }

  private getMonth(date: any): string {
    const m = date.toDate().getMonth().toString();
    const formatedM = m.length < 2 ? '0' + m : m;

    return formatedM;
  }

}
