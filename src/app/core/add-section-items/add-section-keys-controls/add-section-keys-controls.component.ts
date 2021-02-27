import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-section-keys-controls',
  templateUrl: './add-section-keys-controls.component.html',
  styleUrls: ['./add-section-keys-controls.component.scss']
})
export class AddSectionKeysControlsComponent implements OnInit {

  floatLabelControl = new FormControl('auto');

  @Input() rptId;

  addMore = false;
  alreadyAdded = false;
  existing;

  keyControlForm: FormGroup;

  keys = [
    { 'number': 0},
    { 'number': 1},
    { 'number': 2},
    { 'number': 3},
    { 'number': 4},
    { 'number': 5},
    { 'number': 6},
    { 'number': 7},
    { 'number': 8},
    { 'number': 9},
    { 'number': 10}
  ]

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private dataServie: DataService) { }

  ngOnInit(): void {

    this.dataServie.getReportSectionByType(this.rptId, "Key-Control")
                    .subscribe(result => {
                      this.existing = result;
                      if(this.existing.length !=0) {
                        this.alreadyAdded = true;                        
                      }

                      console.log('key control added', this.alreadyAdded);

                      if (this.alreadyAdded) {
                        this.keyControlForm.disable();
                      }
                    })

    
    
    this.keyControlForm = this.formBuilder.group({
      name: [''],
      type: [''],      
      // IN
      conditionIn: this.formBuilder.group({
        buildingEntrandeKey: [0],
        buildingEntrandeKeyCmnts: [''],
        rentalUnitEntranceKey: [0],
        rentalUnitEntranceCmnts: [''],
        rentalUnityDeadBoltKey: [0],
        rentalUnityDeadBoltCmnts: [''],
        parkginRemoteControlKey: [0],
        parkginRemoteControlCmnts: [''],
        otherKey: [0],
        otherCmnts: ['']
      }),
      //- OUT 

      conditionOut: this.formBuilder.group({
        buildingEntrandeKey: [0],
        buildingEntrandeKeyCmnts: [''],
        rentalUnitEntranceKey: [0],
        rentalUnitEntranceCmnts: [''],
        rentalUnityDeadBoltKey: [0],
        rentalUnityDeadBoltCmnts: [''],
        parkginRemoteControlKey: [0],
        parkginRemoteControlCmnts: [''],
        otherKey: [0],
        otherCmnts: ['']
      })
      
      

    })
  }

  submit() {
    this.keyControlForm.get('type').setValue('Key-Control');
    console.log('add secton form', this.keyControlForm.value);
    // call service to add section
    console.log(this.rptId);

    this.dataServie.createSection(this.keyControlForm.value, this.rptId);    

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
