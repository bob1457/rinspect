import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { DataService } from '../services/data.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { report } from 'process';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {

  panelOpenState = false;

  id;
  report;
  sections;

  final = false;
  notAgree = '';
  notAgree1 = '';
  agreeOk = false;

  type = '';

  entrySection;
  kitchenSection;




  edit = false;

  detailForm: FormGroup;


  constructor(private router: Router,
              private actRoute: ActivatedRoute,
              public dataService: DataService,
              private notificationService: NotificationService,
              // private firestore: AngularFirestore,
              private formBuilder: FormBuilder) {

              }

  ngOnInit(): void {

    this.detailForm = this.formBuilder.group({
      id: [''],
      active: [true],
      agentName: [''],
      title: [''],
      moveInInspectDate: [''],
      moveOutDate: [''],
      possesionDate: [''],
      moveOutInspectDate: [''],
      landlord: this.formBuilder.group({
        legalName: [''],
        address: this.formBuilder.group({
          unit: [''],
          street: [''],
          city: [''],
          province: [''],
          postcode: ['']
        })
      }),
      tenant: this.formBuilder.group({
        legalName: [''],
        address: this.formBuilder.group({
          unit: [''],
          street: [''],
          city: [''],
          province: [''],
          postcode: ['']
        })
      }),
      moveInRepaireNote: [''],
      moveInConditionAgreed: [true],
      moveInConditionNotAgreedReason: [''],
      moveOutConditionAgreed: [true],
      moveOutConditionNotAgreedReason: [''],
      depositDeducted: [false],
      depositDeductedAmt: [''],
      tenantForwordingAddress: [''],
      moveOutLandlordFullName: [''],
      moveOutLandlordAddress: ['']
    });


    this.actRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(params.get('id'));
    });

    // this.firestore.collection('report').doc(this.id).collection('section').valueChanges() //get()
    // .subscribe(snap => {
    //   snap.forEach(doc => {
    //     console.log('all', doc);
    //   });
    // });

    this.dataService.getReportDetails(this.id)
        .subscribe(res => {
          this.report = res;
          console.log(res);

          // Bind data to form filed
          this.detailForm.get('title').setValue(this.report.title);
          this.detailForm.get('landlord').get('legalName').setValue(this.report.landlord.legalName);
          this.detailForm.get('landlord').get('address').get('street').setValue(this.report.landlord.address.street);
          this.detailForm.get('landlord').get('address').get('unit').setValue(this.report.landlord.address.unit);
          this.detailForm.get('landlord').get('address').get('city').setValue(this.report.landlord.address.city);
          this.detailForm.get('landlord').get('address').get('province').setValue(this.report.landlord.address.province);
          this.detailForm.get('landlord').get('address').get('postcode').setValue(this.report.landlord.address.postcode);
          this.detailForm.get('tenant').get('legalName').setValue(this.report.tenant.legalName);
          this.detailForm.get('tenant').get('address').get('street').setValue(this.report.tenant.address.street);
          this.detailForm.get('tenant').get('address').get('unit').setValue(this.report.tenant.address.unit);
          this.detailForm.get('tenant').get('address').get('city').setValue(this.report.tenant.address.city);
          this.detailForm.get('tenant').get('address').get('province').setValue(this.report.tenant.address.province);
          this.detailForm.get('tenant').get('address').get('postcode').setValue(this.report.tenant.address.postcode);
// .toDateString()
          this.detailForm.get('moveInInspectDate').setValue(this.report.moveInInspectDate.toDate());
          if (this.report.moveOutInspectDate) {
            this.detailForm.get('moveOutDate').setValue(this.report.moveOutDate.toDate());
          }
          
          if (this.report.moveOutInspectDate) {
             this.detailForm.get('moveOutInspectDate').setValue(this.report.moveOutInspectDate.toDate());
          }
         
          // this.detailForm.get('possesionDate').setValue(this.report.possesionDate.toDate().toDateString());
          this.detailForm.get('possesionDate').setValue(this.report.possesionDate.toDate());
          console.log('date', this.report.possesionDate);
        });

    // Get all sections
    this.dataService.getReportSections(this.id)
        .subscribe(sec => {
          this.sections = sec;
          console.log('sections', this.sections);
        });

    // Get each section
    this.dataService.getReportSectionByType(this.id, 'Entry')
        .subscribe(res => {
          this.entrySection = res;
          console.log('entry-section', this.entrySection);
        })

    this.dataService.getReportSectionByType(this.id, 'Kitchen')
        .subscribe( res => {
          this.kitchenSection = res;
          console.log('kitchen-section', this.kitchenSection);
        })
  }

  submit() {
    this.detailForm.patchValue({
      id: this.id
    })
    console.log('form', this.detailForm.value);
    this.dataService.updateReport(this.detailForm.value)
                    .then(() => {
                      this.notificationService.notification$.next('Report updated successfully!');
                    });
  }

  // clicked(event) {}

  enableEdit() {
    this.edit = true;
  }

  cancelEdit() {
    this.edit = false;
  }

  clicked(event) {
    console.log(event.checked);
    this.final = event.checked;
  }

  agreeToDeposit(event) {
    this.agreeOk = event.checked;
  }

  onChange(event) {
    console.log(event);
    this.notAgree = event.value;
  }

  onChange1(event) {
    console.log(event);
    this.notAgree1 = event.value;
  }

}
