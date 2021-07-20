import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-report-view-content-footer',
  templateUrl: './report-view-content-footer.component.html',
  styleUrls: ['./report-view-content-footer.component.scss']
})
export class ReportViewContentFooterComponent implements OnInit {

  @Input() report;

  signatureImg: string;
  signatureImg1: string;
  signatureImg2: string;
  signatureImg3: string;
  signatureImg4: string;

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 250,
    'canvasHeight': 80
  };

  constructor() { }

  ngOnInit(): void {
    console.log('rpt in content footer', this.report);
  }

  signed(event) {
    this.signatureImg = event;
    console.log('signature returned: ', this.signatureImg);
  }

  signed1(event) {
    this.signatureImg1 = event;
    console.log('signature returned: ', this.signatureImg);
  }

  signed2(event) {
    this.signatureImg2 = event;
    console.log('signature returned: ', this.signatureImg);
  }

  signed3(event) {
    this.signatureImg3 = event;
    console.log('signature returned: ', this.signatureImg);
  }

  signed4(event) {
    this.signatureImg4 = event;
    console.log('signature returned: ', this.signatureImg);
  }

}
