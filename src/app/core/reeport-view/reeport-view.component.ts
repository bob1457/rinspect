import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import * as html2pdf from 'html2pdf.js';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-reeport-view',
  templateUrl: './reeport-view.component.html',
  styleUrls: ['./reeport-view.component.scss']
})
export class ReeportViewComponent implements OnInit {

  id: number;
  reportDetails;
  report$: Observable<any>;
  saving = false;
  done = false;
  uploadForm: FormGroup;

  @ViewChild('pdfdoc', {static: false}) pdfdoc: ElementRef;

  constructor(
    private router: Router,
    private location: Location,
    private actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
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
      leaseId: 1
    });

    // const formData = new FormData();

    // formData.append('file', this.uploadForm.get('document').value);
    console.log('upload form', this.uploadForm.value);

    // this.backendService.saveReport(this.uploadForm.value).subscribe(
    //   res => {
    //     // this.saving = false;
    //     // this.done = true;
    //     // setTimeout(() => { this.done = false; }, 2000);
    //     // console.log('response', res);
    //   });

  }

}
