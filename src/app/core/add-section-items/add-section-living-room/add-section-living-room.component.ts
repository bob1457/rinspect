import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-section-keys-living-room',
  templateUrl: './add-section-living-room.component.html',
  styleUrls: ['./add-section-living-room.component.scss']
})
export class AddSectionLivingRoomComponent implements OnInit {

  floatLabelControl = new FormControl('auto');
  // constructor() { }

  // ngOnInit(): void {
    
  // }

  @Input() rptId;

  addMore = false;

  livingroomExists = false;
  familyExists = false;
  alreadyAdded = false;

  livingForm: FormGroup;
  livingRoomType = 'LivingRoom';

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

    let kitchenSubType = {
      'M':'Livingroom', 
      'S':'Familyroom'      
    }

    for (let [key, value] of Object.entries(kitchenSubType)) {
      console.log('subtype of kitchen---', value);

      this.dataServie.getReportSectionBySubType(this.rptId, value)
          .subscribe( res => {
            if(res.length > 0) {
              // key = key + "Y";
              switch (key) {
                case 'M':
                  this.livingroomExists = true;
                  break;
                case 'S':
                  this.familyExists = true;
                  break;                
                default:
                  break;
              }
              // console.log('status:', key);
              // console.log(value + ' exists');
              if( this.livingroomExists == true && this.familyExists == true) {
                this.alreadyAdded = true;
                this.livingForm.disable();
              }
            } else {
              // key = key + "N";
              switch (key) {
                case 'M':
                  this.livingroomExists = false;
                  break;
                case 'S':
                  this.familyExists = false;
                  break;                
                default:
                  break;
              }
              // console.log('status:', key);
              // console.log(value + ' not exists');
            }
           
          })
    }
    
    this.livingForm = this.formBuilder.group({
      name: [''],
      type: [''],
      subtype: ['Living Room'], // new attribute
      // IN
      conditionIn: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        closetsCode: [''],
        closetsCmnts: [''],
        TVCmnts: [''],
        TVCode: [''],
        AirConditioningCmnts: [''],
        AirConditioningCode: [''],
        FireplaceCmnts: [''],
        FireplaceCode: [''],
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
        closetsCode: [''],
        closetsCmnts: [''],
        TVCmnts: [''],
        TVCode: [''],
        AirConditioningCmnts: [''],
        AirConditioningCode: [''],
        FireplaceCmnts: [''],
        FireplaceCode: [''],      
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
    this.livingForm.get('type').setValue('Living-Room');

    //Check if main entry
    if(this.livingRoomType == 'LivingRoom') {
      this.livingForm.get('subtype').setValue('Living Room');
    }
    else {
      this.livingForm.get('subtype').setValue('Family Room');
    }


    console.log('add secton form', this.livingForm.value);
    // call service to add section
    console.log(this.rptId);

    this.dataServie.createSection(this.livingForm.value, this.rptId);    

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
    this.livingRoomType = event.value;
  }

}
