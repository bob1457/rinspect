import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-section-master-bedroom',
  templateUrl: './add-section-master-bedroom.component.html',
  styleUrls: ['./add-section-master-bedroom.component.scss']
})
export class AddSectionMasterBedroomComponent implements OnInit {

  floatLabelControl = new FormControl('auto');
  
  @Input() rptId;

  addMore = false;

  bedroomForm: FormGroup;
  bedroomType = 'Master Bedrooom';

  maasterBedExists = false;  
  secondBedRoomExists = false;
  thirdBedRoomExists = false;
  forthBedRoomExists = false;
  fifthBedRoomExists = false;

  queryResult;

  // bedroomSubType = {
  //   'M':'Master Bedrooom', 
  //   'S':'Second Bedroom',
  //   'T':'Third Bedroom',
  //   'F':'Forth Bedroom',
  //   'V':'Fifth Bedroom'
  // }

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

    // Find out if any of the bedrrom already fifthBedRoomExists

    let bedroomSubType = {
      'M':'Master Bedroom', 
      'S':'Second Bedroom',
      'T':'Third Bedroom',
      'F':'Forth Bedroom',
      'V':'Fifth Bedroom'
    }

    console.log('reptID:', this.rptId);

    // this.dataServie.getReportSectionBySubType(this.rptId, 'Master Bedroom')
    // .subscribe( res => {
      
    //   console.log('Master Bed-section check:', res);
    // })

    for (let [key, value] of Object.entries(bedroomSubType)) {
      console.log('subtype of bedrrom---', value);

      this.dataServie.getReportSectionBySubType(this.rptId, value)
          .subscribe( res => {
            if(res.length > 0) {
              // key = key + "Y";
              switch (key) {
                case 'M':
                  this.maasterBedExists = true;
                  break;
                case 'S':
                  this.secondBedRoomExists = true;
                  break;
                case 'T':
                  this.thirdBedRoomExists = true;
                  break;
                case 'F':
                  this.forthBedRoomExists = true;
                  break;
                case 'V':
                  this.fifthBedRoomExists = true;
                  break;
                default:
                  break;
              }
              // console.log('status:', key);
              // console.log(value + ' exists');
            } else {
              // key = key + "N";
              switch (key) {
                case 'M':
                  this.maasterBedExists = false;
                  break;
                case 'S':
                  this.secondBedRoomExists = false;
                  break;
                case 'T':
                  this.thirdBedRoomExists = false;
                  break;
                case 'F':
                  this.forthBedRoomExists = false;
                  break;
                case 'V':
                  this.fifthBedRoomExists = false;
                  break;
                default:
                  break;
              }
              // console.log('status:', key);
              // console.log(value + ' not exists');
            }
           
          })
    }
    
    this.bedroomForm = this.formBuilder.group({
      name: [''],
      type: [''],
      isMaster: [false],
      subtype: ['Master Bedroom'], // new attribute
      // IN
      conditionIn: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        closetsCode: [''],
        closetsCmnts: [''],
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
        closetsCode: [''],
        closetsCmnts: [''],
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
    this.bedroomForm.get('type').setValue('Bedroom');

    switch(this.bedroomType) { 
      case 'Master Bedroom': { 
        this.bedroomForm.get('subtype').setValue('Master Bedroom');
         break; 
      } 
      case 'Second Bdedroom': { 
        this.bedroomForm.get('subtype').setValue('Second Bedroom');
         break; 
      } 
      case 'Third Bedroom': { 
        this.bedroomForm.get('subtype').setValue('Third Bedroom');
         break; 
      } 
      case 'Forth Bedroom': { 
        this.bedroomForm.get('subtype').setValue('Forth Bedroom');
         break; 
      } 
      case 'Fifth Bedroom': { 
        this.bedroomForm.get('subtype').setValue('Fifth Bedroom');
         break; 
      } 
      default: { 
        this.bedroomForm.get('subtype').setValue('Master Bdedroom'); 
         break; 
      } 
   } 

    console.log('add secton form', this.bedroomForm.value);
    // call service to add section
    console.log(this.rptId);

    this.dataServie.createSection(this.bedroomForm.value, this.rptId);    

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
    this.bedroomType = event.value;
  }

}
