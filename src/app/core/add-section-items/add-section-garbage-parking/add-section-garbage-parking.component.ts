import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-section-garbage-parking',
  templateUrl: './add-section-garbage-parking.component.html',
  styleUrls: ['./add-section-garbage-parking.component.scss']
})
export class AddSectionGarbageParkingComponent implements OnInit {

  floatLabelControl = new FormControl('auto');

  @Input() rptId;

  addMore = false;

  alreadyAdded = false;
  existing;

  garbageParkingForm: FormGroup;

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

    this.dataServie.getReportSectionByType(this.rptId, "Garbage-Parking")
                    .subscribe(result => {
                      this.existing = result;
                      if(this.existing.length !=0) {
                        this.alreadyAdded = true;                        
                      }

                      if (this.alreadyAdded) {
                        this.garbageParkingForm.disable();
                      }

                      console.log('garbage-parking added', this.alreadyAdded);
                    })
    
    this.garbageParkingForm = this.formBuilder.group({
      name: [''],
      type: [''],
      isMaster: [false],
      // IN
      conditionIn: this.formBuilder.group({        
        electricCmnts: [''],
        electricCode: [''], 
        otherCode: [''],
        otherCmnts: [''],
        other2Code: [''],
        other2Cmnts: ['']
      }),
      //- OUT 

      conditionOut: this.formBuilder.group({        
        electricCmnts: [''],
        electricCode: [''],
        otherCode: [''],
        otherCmnts: [''],
        other2Code: [''],
        other2Cmnts: ['']
      })
      
      

    })
  }

  submit() {
    this.garbageParkingForm.get('type').setValue('Garbage-Parking');
    console.log('add secton form', this.garbageParkingForm.value);
    // call service to add section
    console.log(this.rptId);

    this.dataServie.createSection(this.garbageParkingForm.value, this.rptId);    

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
