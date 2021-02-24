import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { DataService } from '../services/data.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { report } from 'process';

import { NotificationService } from 'src/app/shared/notification.service';
import { formatDate } from '@angular/common';


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

  sectionMissing = false;

  missingSections = [];

  type = '';

  // All sections
  mainEntrySection;
  secondaryEntrySection;
  mainkitchenSection;
  secondarykitchenSection;
  livingRoomSection;
  familyRoomSection;
  diningRoomSEction;
  stairwellSection;
  bathroomSection;

  bedroomSection2;
  masterBedroomSection;
  bedroomSection3;
  bedroomSection4;
  bedroomSection5;


  exteriorSection;
  utilitySection;
  garbageParkingSection;
  basementSection;
  keyControlSection;
  otherSection;




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
      completed: [false],
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
      depositDeductedAmt: [0],
      petDepositDeductedAmt: [0],
      tenantForwordingAddress: [''],
      moveOutLandlordFullName: [''],
      moveOutLandlordAddress: [''],
      updated: [''],
      // finalize report form data:
      repairAtStart: [''],
      damageAtEnd: [''],
      agreeAtStart: ['agree'],
      reasonNotAgreeAtStart: [''],
      agreeAtEnd: ['agree'],
      reasonNotAgreeAtEnd: [''] ,   
      tenantForwardingAddressUnit: [''],
      tenantForwardingAddressStreet: [''],
      tenantForwardingAddressCity: [''],
      tenantForwardingAddressProvince: [''],
      tenantForwardingAddressPostCode: [''],
      landloardNameAddress: ['']
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
          // console.log('date', this.report.possesionDate);

          this.detailForm.get('repairAtStart').setValue(this.report.repairAtStart);
          this.detailForm.get('damageAtEnd').setValue(this.report.damageAtEnd);
          this.detailForm.get('depositDeducted').setValue(this.report.depositDeducted);
          if(this.report.depositDeducted) {
            this.agreeOk = true;
          }
          this.detailForm.get('depositDeductedAmt').setValue(this.report.depositDeductedAmt);
          this.detailForm.get('petDepositDeductedAmt').setValue(this.report.petDepositDeductedAmt);

          if(this.report.completed) {
            this.final = true;
            console.log('completed', this.report.completed);
            console.log('final', this.final);
          }

        });

    // Get all sections
    this.dataService.getReportSections(this.id)
        .subscribe(sec => {
          this.sections = sec;
          console.log('sections', this.sections);
        });

    // Get each section

    this.dataService.getReportSectionBySubType(this.id, 'MainEntry')
        .subscribe(res => {
          this.mainEntrySection = res;
          if(this.mainEntrySection.length == 0) {
            this.sectionMissing = true;
            this.missingSections.push('Main Entry');
          }
          console.log('main-entry-section', this.mainEntrySection);
        })

    this.dataService.getReportSectionBySubType(this.id, 'SecondaryEntry')
    .subscribe(res => {
      this.secondaryEntrySection = res;
      console.log('-secondary-entry-section', this.secondaryEntrySection);
    })

    // this.dataService.getReportSectionBySubType(this.id, 'MainEntry')
    // .subscribe( res => {
    //   res.map(a => {
    //     const data = a.payload.doc.data();
    //     const id = a.payload.doc.id;
    //     this.mainEntrySection = data;
    //     console.log('section view', this.mainEntrySection);
    //     return {id, ...data}
    //   } )
    // })

    this.dataService.getReportSectionBySubType(this.id, 'MainKitchen')
        .subscribe( res => {
          this.mainkitchenSection = res;
          if(this.mainkitchenSection.length == 0) {
            this.sectionMissing = true;
            this.missingSections.push('Main Kitchen');
          }
          console.log('Main-kitchen-section', this.mainkitchenSection);
        })

    this.dataService.getReportSectionBySubType(this.id, 'SecondaryKitchen')
    .subscribe(res => {
      this.secondarykitchenSection = res;
      console.log('-secondary-kitchen-section', this.secondarykitchenSection);
    })

    this.dataService.getReportSectionBySubType(this.id, 'LivingRoom')
    .subscribe( res => {
      this.livingRoomSection = res;
      if(this.livingRoomSection.length == 0) {
        this.sectionMissing = true;
        this.missingSections.push('Living Room');
      }
      console.log('Living room section', this.livingRoomSection);
    })

    this.dataService.getReportSectionBySubType(this.id, 'Family Room')
    .subscribe( res => {
      this.familyRoomSection = res;
      console.log('Familyroom-section', this.familyRoomSection);
    })

    this.dataService.getReportSectionByType(this.id, 'Dinning-Room')
    .subscribe( res => {
      this.diningRoomSEction = res;
      if(this.diningRoomSEction.length == 0) {
        this.sectionMissing = true;
        this.missingSections.push('Dinning Room');
      }
      console.log('Dinning-section', this.diningRoomSEction);
    })

    this.dataService.getReportSectionByType(this.id, 'Stairwell')
    .subscribe( res => {
      this.stairwellSection = res;
      console.log('Stair-section', this.stairwellSection);
    })



    

    this.dataService.getReportSectionByType(this.id, 'Bathroom')
    .subscribe( res => {
      this.bathroomSection = res;
      if(this.bathroomSection.length == 0) {
        this.sectionMissing = true;
        this.missingSections.push('Bathroom');
      }
      console.log('Bath-section', this.bathroomSection);
    })

    // this.dataService.getReportSectionBySubType(this.id, 'Bathroom')
    // .subscribe( res => {
    //   this.bathroomSection = res;
    //   console.log('Bath-section', this.bathroomSection);
    // })

    // this.dataService.getReportSectionBySubType(this.id, 'Bathroom')
    // .subscribe( res => {
    //   this.bathroomSection = res;
    //   console.log('Bath-section', this.bathroomSection);
    // })

    // this.dataService.getReportSectionBySubType(this.id, 'Bathroom')
    // .subscribe( res => {
    //   this.bathroomSection = res;
    //   console.log('Bath-section', this.bathroomSection);
    // })

    // this.dataService.getReportSectionBySubType(this.id, 'Bathroom')
    // .subscribe( res => {
    //   this.bathroomSection = res;
    //   console.log('Bath-section', this.bathroomSection);
    // })
    

    this.dataService.getReportSectionBySubType(this.id, 'Fifth Bedroom')
    .subscribe( res => {
      this.bedroomSection5 = res;
      console.log('Bed-section', this.bedroomSection5);
    })

    this.dataService.getReportSectionBySubType(this.id, 'Master Bedroom')
    .subscribe( res => {
      this.masterBedroomSection = res;
      if(this.masterBedroomSection.length == 0) {
        this.sectionMissing = true;
      }
      console.log('Master Bed-section', this.masterBedroomSection);
    })

    this.dataService.getReportSectionBySubType(this.id, 'Second Bedroom')
    .subscribe( res => {
      this.bedroomSection2 = res;
      console.log('Bed-section', this.bedroomSection2);
    })

    this.dataService.getReportSectionBySubType(this.id, 'Third Bedroom')
    .subscribe( res => {
      this.bedroomSection3 = res;
      console.log('Bed-section', this.bedroomSection3);
    })

    this.dataService.getReportSectionBySubType(this.id, 'Forth Bedroom')
    .subscribe( res => {
      this.bedroomSection4 = res;
      console.log('Bed-section', this.bedroomSection4);
    })





    this.dataService.getReportSectionByType(this.id, 'Exterior')
    .subscribe( res => {
      this.exteriorSection = res;
      console.log('Exterior-section', this.exteriorSection);
    })

    this.dataService.getReportSectionByType(this.id, 'Utility-Room')
    .subscribe( res => {
      this.utilitySection = res;
      console.log('utility-section', this.utilitySection);
    })


    this.dataService.getReportSectionByType(this.id, 'Garbage-Parking')
    .subscribe( res => {
      this.garbageParkingSection = res;
      console.log('garbage-section', this.garbageParkingSection);
    })

    this.dataService.getReportSectionByType(this.id, 'Basement')
    .subscribe( res => {
      this.basementSection = res;
      console.log('basement-section', this.basementSection);
    })

    this.dataService.getReportSectionByType(this.id, 'Key-Control')
    .subscribe( res => {
      this.keyControlSection = res;
      if(this.keyControlSection.length == 0) {
        this.sectionMissing = true;
        this.missingSections.push('Keys & Control');
      }
      console.log('key-section', this.keyControlSection);
    })

    this.dataService.getReportSectionByType(this.id, 'Other')
    .subscribe( res => {
      this.otherSection = res;
      console.log('other-section', this.otherSection);
    })

    console.log('Missing Sections', this.missingSections);
  }

  submit() {
    let date = new Date();  

    let isFinal = false;

    if(this.final) {
      isFinal = true
    }

    this.detailForm.patchValue({
      id: this.id,
      completed: isFinal,
      updated: formatDate(date, 'MMMM dd, yyyy hh:mm:ss a','en-US', 'UTC-0700')
    })
    console.log('form', this.detailForm.value);
    this.dataService.updateReport(this.detailForm.value)
                    .then(() => {
                      this.notificationService.notification$.next('Report updated successfully!');
                    })
                    .catch((err) => {
                      this.notificationService.errorNotification$.next('Error occured during update!');
                    });
    this.edit = false;
  }

  // clicked(event) {}

  enableEdit() {
    this.edit = true;
  }

  cancelEdit() {
    this.edit = false;
  }

  clicked(event) {
    // Need to check all required sections are done if changed to TRUE.

    console.log(event.checked);
    this.final = event.checked;
  }

  agreeToDeposit(event) {
    this.agreeOk = event.checked;
    this.detailForm.patchValue({
      depositDeducted: this.agreeOk
    })
  }

  onChange(event) {
    console.log(event);
    this.notAgree = event.value;
  }

  onChange1(event) {
    console.log(event);
    this.notAgree1 = event.value;
  }

  viewReport() {
    let url = '/home/report-view/' + this.id;

    this.router.navigateByUrl(url);
  }

}
