import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';


@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {

  @Input() type;
  @Output() sign: EventEmitter<any> = new EventEmitter<any>();

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
    
    this.sign.emit(this.signatureImg);
  }

  ngOnInit(): void {
  }

}
