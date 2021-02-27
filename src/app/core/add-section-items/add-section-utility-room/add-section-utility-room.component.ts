import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-section-utility-room',
  templateUrl: './add-section-utility-room.component.html',
  styleUrls: ['./add-section-utility-room.component.scss']
})
export class AddSectionUtilityRoomComponent implements OnInit {

  floatLabelControl = new FormControl('auto');

  @Input() rptId;

  addMore = false;

  utilityForm: FormGroup;

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

    this.utilityForm = this.formBuilder.group({
      name: [''],
      type: [''],
      isMaster: [false],
      // IN
      conditionIn: this.formBuilder.group({
        washerDryerCode: [''],
        wahserDryerCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],
        otherCode: [''],
        otherCmnts: ['']
      }),
      //- OUT

      conditionOut: this.formBuilder.group({
        washerDryerCode: [''],
        wahserDryerCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],
        otherCode: [''],
        otherCmnts: ['']
      })



    })
  }

  submit() {
    this.utilityForm.get('type').setValue('Utility-Room');
    console.log('add secton form', this.utilityForm.value);
    // call service to add section
    console.log(this.rptId);

    this.dataServie.createSection(this.utilityForm.value, this.rptId);

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

}
