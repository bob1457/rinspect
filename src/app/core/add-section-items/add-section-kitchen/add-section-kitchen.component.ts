import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-section-kitchen',
  templateUrl: './add-section-kitchen.component.html',
  styleUrls: ['./add-section-kitchen.component.scss']
})
export class AddSectionKitchenComponent implements OnInit {

  floatLabelControl = new FormControl('auto');

  kitchenType = 'MainKitchen';
  kitchenForm: FormGroup;

  mainKitchenExists = false;
  secKitchenExists = false;
  alreadyAdded = false;

  @Input() rptId;

  addMore = false;

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
    console.log('report id:',this.rptId);

    let kitchenSubType = {
      'M':'MainKitchen',
      'S':'SecondaryKitchen'
    }

    for (let [key, value] of Object.entries(kitchenSubType)) {
      console.log('subtype of kitchen---', value);

      this.dataServie.getReportSectionBySubType(this.rptId, value)
          .subscribe( res => {
            if(res.length > 0) {
              // key = key + "Y";
              switch (key) {
                case 'M':
                  this.mainKitchenExists = true;
                  this.kitchenType = 'SecondaryKitchen';
                  break;
                case 'S':
                  this.secKitchenExists = true;
                  break;
                default:
                  break;
              }
              // console.log('status:', key);
              // console.log(value + ' exists');
              if( this.mainKitchenExists == true && this.secKitchenExists == true) {
                this.alreadyAdded = true;
                this.kitchenForm.disable();
              }
            } else {
              // key = key + "N";
              switch (key) {
                case 'M':
                  this.mainKitchenExists = false;
                  break;
                case 'S':
                  this.secKitchenExists = false;
                  break;
                default:
                  break;
              }
              // console.log('status:', key);
              // console.log(value + ' not exists');
            }

          })
    }

    this.kitchenForm = this.formBuilder.group({
      name: [''],
      type: [''],
      subtype: ['MainKitchen'], // new attribute
      conditionIn: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        wallTrimCode: [''],
        wallTrimCmnts: [''],
        floorCmnts: [''],
        floorCode: [''],
        counterTopCmnts: [''],
        counterTopCode: [''],
        cabnetsAndDoorsCmnts: [''],
        cabnetsAndDoorsCode: [''],
        stoveAndStoveTopCmnts: [''],
        stoveAndStoveTopCode: [''],
        ovenCmnts: [''],
        ovenCode: [''],
        exhaustHoodAndFanCmnts: [''],
        exhaustHoodAndFanCode: [''],
        tapSinkCmnts: [''],
        tapSinkCode: [''],
        frigeSelvesCmnts: [''],
        frigeSelvesCode: [''],
        frigeFreezerCmnts: [''],
        frigeFreezerCode: [''],
        frigeExteriorCmnts: [''],
        frigeExteriorCode: [''],
        closetsCode: [''],
        closetsCmnts: [''],
        dishWasherCmnts: [''],
        dishWasherCode: [''],
        electricCmnts: [''],
        electricCode: [''],
        lightingCmnts: [''],
        lightingCode: [''],
        windowsCmnts: [''],
        windowsCode: [''],
        otherCode: [''],
        otherCmnts: ['']
      }),
      conditionOut: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        wallTrimCode: [''],
        wallTrimCmnts: [''],
        floorCmnts: [''],
        floorCode: [''],
        counterTopCmnts: [''],
        counterTopCode: [''],
        cabnetsAndDoorsCmnts: [''],
        cabnetsAndDoorsCode: [''],
        stoveAndStoveTopCmnts: [''],
        stoveAndStoveTopCode: [''],
        ovenCmnts: [''],
        ovenCode: [''],
        exhaustHoodAndFanCmnts: [''],
        exhaustHoodAndFanCode: [''],
        tapSinkCmnts: [''],
        tapSinkCode: [''],
        frigeSelvesCmnts: [''],
        frigeSelvesCode: [''],
        frigeFreezerCmnts: [''],
        frigeFreezerCode: [''],
        frigeExteriorCmnts: [''],
        frigeExteriorCode: [''],
        closetsCode: [''],
        closetsCmnts: [''],
        dishWasherCmnts: [''],
        dishWasherCode: [''],
        electricCmnts: [''],
        electricCode: [''],
        lightingCmnts: [''],
        lightingCode: [''],
        windowsCmnts: [''],
        windowsCode: [''],
        otherCode: [''],
        otherCmnts: ['']
      }),

    });
  }

  submit() {
    // debugger;
    this.kitchenForm.get('type').setValue('Kitchen');

    //Check if main entry
    if(this.kitchenType == 'MainKitchen') {
      this.kitchenForm.get('subtype').setValue('MainKitchen');
    }
    else {
      this.kitchenForm.get('subtype').setValue('SecondaryKitchen');
    }

    console.log('add secton form', this.kitchenForm.value);
    // call service to add section
    console.log(this.rptId);

    this.dataServie.createSection(this.kitchenForm.value, this.rptId);

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
    this.kitchenType = event.value;
  }

}
