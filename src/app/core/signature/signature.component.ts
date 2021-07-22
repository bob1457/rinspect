import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { SignaturePad } from 'angular2-signaturepad';


@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {

  @Input() type;
  @Input() rptId;
  @Output() sign: EventEmitter<any> = new EventEmitter<any>();

  signatureImg: string;

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 250,
    'canvasHeight': 80
  };

  constructor(private storage: AngularFireStorage) { }

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
    debugger;
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;

    const img = this.signatureImg.split(',')[1];

    this.uploadImg(img).then(link => {
      this.signatureImg = link;
      console.log('link from private function', this.signatureImg);
    });

    this.sign.emit(this.signatureImg);
  }

  ngOnInit(): void {
  }

  uploadImg(imageUrl: string) {

    const path = '/signatures/sig_' + this.rptId + '_' + Math.floor(Math.random() * 10000);

    const storageRef = this.storage.ref(path);

    return storageRef.putString(imageUrl, 'base64',{contentType: 'image/png'}).then(snap => {
      return snap.ref.getDownloadURL();
    }).then(url => {
      console.log('img url', url);
      return url;
    })
  }

}
