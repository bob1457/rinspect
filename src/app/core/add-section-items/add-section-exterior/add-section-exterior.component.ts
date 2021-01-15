import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-section-exterior',
  templateUrl: './add-section-exterior.component.html',
  styleUrls: ['./add-section-exterior.component.scss']
})
export class AddSectionExteriorComponent implements OnInit {

  floatLabelControl = new FormControl('auto');

  @Input() rptId;

  addMore = false;

  exteriorForm: FormGroup;

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

    this.exteriorForm = this.formBuilder.group({
      name: [''],
      type: [''],
      // isMaster: [false],
      // IN
      conditionIn: this.formBuilder.group({
        frontRearEmtranceCmnts: [''],
        frontRearEmtranceCode: [''],
        patioBalconyDoorsCode: [''],
        patioBalconyDoorsCmnts: [''],
        garbabageContainerCode: [''],
        garbabageContainerCmnts: [''],
        galssAndFramesCmnts: [''],
        galssAndFramesCode: [''],
        stucoAndSidingCmnts: [''],
        stucoAndSidingCode: [''],
        lightingCmnts: [''],
        lightingCode: [''],
        groundsAndWallsCode: [''],
        groundsAndWallsCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],
        otherCode: [''],
        otherCmnts: ['']
      }),
      //- OUT

      conditionOut: this.formBuilder.group({
        frontRearEmtranceCmnts: [''],
        frontRearEmtranceCode: [''],
        patioBalconyDoorsCode: [''],
        patioBalconyDoorsCmnts: [''],
        garbabageContainerCode: [''],
        garbabageContainerCmnts: [''],
        galssAndFramesCmnts: [''],
        galssAndFramesCode: [''],
        stucoAndSidingCmnts: [''],
        stucoAndSidingCode: [''],
        lightingCmnts: [''],
        lightingCode: [''],
        groundsAndWallsCode: [''],
        groundsAndWallsCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],
        otherCode: [''],
        otherCmnts: ['']
      })



    })
  }

  submit() {
    this.exteriorForm.get('type').setValue('Exterior');
    console.log('add secton form', this.exteriorForm.value);
    // call service to add section
    console.log(this.rptId);

    this.dataServie.createSection(this.exteriorForm.value, this.rptId);

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
