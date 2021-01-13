import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-section-main-bath-room',
  templateUrl: './add-section-main-bath-room.component.html',
  styleUrls: ['./add-section-main-bath-room.component.scss']
})
export class AddSectionMainBathRoomComponent implements OnInit {

  floatLabelControl = new FormControl('auto');
  
  @Input() rptId;

  addMore = false;

  mainBathForm: FormGroup;
  bathroomType = 'Main Bathrooom';

  codes = [
    { 'name': 'G'},
    { 'name': 'F'},
    { 'name': 'P'},
    { 'name': 'M'},
    { 'name': 'D'},
    { 'name': 'S'},
    { 'name': 'B'},
    { 'name': 'DT'},
    { 'name': 'ST'}
  ]

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private dataServie: DataService) { }

  ngOnInit(): void {
    
    this.mainBathForm = this.formBuilder.group({
      name: [''],
      type: [''],
      isMain: [false],
      subtype: ['Main Bathroom'],
      // IN
      conditionIn: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        cabinetsMirrorCode: [''],
        cabinetsMirrorCmnts: [''],
        tubShowerTapStopperCode: [''],
        tubShowerTapStopperCmnts: [''],
        sinkStopperTapsCode: [''],
        sinkStopperTapsCmnts: [''],
        toiletCode: [''],
        toiletCmnts: [''],
        doorCode: [''],
        doorCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],
        floorCmnts: [''],
        floorCode: [''],
        lightingCmnts: [''],
        lightingCode: [''],
        wallTrimCmnts: [''],
        wallTrimCode: [''],
        windowsCmnts: [''],
        windowsCode: [''],
        otherCode: [''],
        otherCmnts: ['']
      }),
      //- OUT 

      conditionOut: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        cabinetsMirrorCode: [''],
        cabinetsMirrorCmnts: [''],
        tubShowerTapStopperCode: [''],
        tubShowerTapStopperCmnts: [''],
        sinkStopperTapsCode: [''],
        sinkStopperTapsCmnts: [''],
        toiletCode: [''],
        toiletCmnts: [''],
        doorCode: [''],
        doorCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],
        floorCmnts: [''],
        floorCode: [''],
        lightingCmnts: [''],
        lightingCode: [''],
        wallTrimCmnts: [''],
        wallTrimCode: [''],
        windowsCmnts: [''],
        windowsCode: [''],
        otherCode: [''],
        otherCmnts: ['']
      })
      
      

    })
  }

  submit() {
    this.mainBathForm.get('type').setValue('Bathroom');

    switch(this.bathroomType) { 
      case 'Main Bathroom': { 
        this.mainBathForm.get('subtype').setValue('Main Bathroom');
         break; 
      } 
      case 'Second Bathroom': { 
        this.mainBathForm.get('subtype').setValue('Second Bathroom');
         break; 
      } 
      case 'Third Bathroom': { 
        this.mainBathForm.get('subtype').setValue('Third Bathroom');
         break; 
      } 
      case 'Forth Bathroom': { 
        this.mainBathForm.get('subtype').setValue('Forth Bathroom');
         break; 
      } 
      // case 'Fifth Bedroom': { 
      //   this.mainBathForm.get('subtype').setValue('Fifth Bedroom');
      //    break; 
      // } 
      default: { 
        this.mainBathForm.get('subtype').setValue('Main Bathroom'); 
         break; 
      } 
   }


    console.log('add secton form', this.mainBathForm.value);
    // call service to add section
    console.log(this.rptId);

    this.dataServie.createSection(this.mainBathForm.value, this.rptId);    

    if (this.addMore) {
      this.reloadComponent();
    }else {
      this.router.navigate(['home/report-details', this.rptId]);
    }
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/home/addSection', this.rptId]);
  }

  clicked(event) {
    this.addMore = event.checked;
    console.log(this.addMore);
  }

  onChange(event) {
    console.log(event);
    this.bathroomType = event.value;
  }

}
