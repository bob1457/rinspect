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
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  signaturePadOptions: Object = { 
    'minWidth': 2,
    'canvasWidth': 250,
    'canvasHeight': 80
  };

  constructor() { }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 2); 
    this.signaturePad.clear(); 
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
  }

  ngOnInit(): void {
  }

}
