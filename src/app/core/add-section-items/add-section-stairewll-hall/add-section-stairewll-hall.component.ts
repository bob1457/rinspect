import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-section-stairewll-hall',
  templateUrl: './add-section-stairewll-hall.component.html',
  styleUrls: ['./add-section-stairewll-hall.component.scss']
})
export class AddSectionStairewllHallComponent implements OnInit {

  stairForm: FormGroup;

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

    this.stairForm = this.formBuilder.group({
      name: [''],
      type: [''],
      conditionIn: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        wallTrimCode: [''],
        wallTrimCmnts: [''],
        closetsCode: [''],
        closetsCmnts: [''],
        treadAndLandingsCode: [''],
        treadAndLandingsCmnts: [''],
        railingBannisterCode: [''],
        railingBannisterCmnts: [''],
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
        closetsCode: [''],
        closetsCmnts: [''],
        treadAndLandingsCode: [''],
        treadAndLandingsCmnts: [''],
        railingBannisterCode: [''],
        railingBannisterCmnts: [''],
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
    this.stairForm.get('type').setValue('Stairwell');
    console.log('add secton form', this.stairForm.value);
    // call service to add section
    console.log(this.rptId);

    this.dataServie.createSection(this.stairForm.value, this.rptId);

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

}
