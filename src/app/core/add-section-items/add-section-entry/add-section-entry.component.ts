import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-section-entry',
  templateUrl: './add-section-entry.component.html',
  styleUrls: ['./add-section-entry.component.scss']
})
export class AddSectionEntryComponent implements OnInit {

  @Input() rptId;

  addMore = false;

  entryForm: FormGroup;

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
    
    this.entryForm = this.formBuilder.group({
      name: [''],
      type: [''],
      // IN
      conditionIn: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        closetsCode: [''],
        closetsCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],
        floorCmnts: [''],
        floorCode: [''],
        lightingCmnts: [''],
        lightingCode: [''],
        wallTrimCmnts: [''],
        wallTrimCode: [''],
        windowsCmnts: [''],
        windowsCode: ['']
      }),
      //- OUT 

      conditionOut: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],
        closetsCode: [''],
        closetsCmnts: [''],      
        electricCmnts: [''],
        electricCode: [''],
        floorCmnts: [''],
        floorCode: [''],
        lightingCmnts: [''],
        lightingCode: [''],
        wallTrimCmnts: [''],
        wallTrimCode: [''],
        windowsCmnts: [''],
        windowsCode: ['']
      })
      
      

    })
  }

  submit() {
    this.entryForm.get('type').setValue('Entry');
    console.log('add secton form', this.entryForm.value);
    // call service to add section
    console.log(this.rptId);

    this.dataServie.createSection(this.entryForm.value, this.rptId);    

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
