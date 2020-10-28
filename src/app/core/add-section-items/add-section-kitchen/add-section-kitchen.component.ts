import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-section-kitchen',
  templateUrl: './add-section-kitchen.component.html',
  styleUrls: ['./add-section-kitchen.component.scss']
})
export class AddSectionKitchenComponent implements OnInit {

  kitchenForm: FormGroup;

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

    this.kitchenForm = this.formBuilder.group({
      name: [''],
      type: [''],
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
        windowsCode: ['']
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
        windowsCode: ['']
      }),

    });
  }

  submit() {
    this.kitchenForm.get('type').setValue('Kitchen');
    console.log('add secton form', this.kitchenForm.value);
    // call service to add section
    console.log(this.rptId);

    // this.dataServie.createSection(this.kitchenForm.value, this.rptId);    

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

  // clicked(event) {
  //   this.addMore = event.checked;
  //   console.log(this.addMore);
  // }

}
