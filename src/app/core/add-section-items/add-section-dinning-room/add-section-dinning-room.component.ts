import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-section-dinning-room',
  templateUrl: './add-section-dinning-room.component.html',
  styleUrls: ['./add-section-dinning-room.component.scss']
})
export class AddSectionDinningRoomComponent implements OnInit {

  floatLabelControl = new FormControl('auto');

  @Input() rptId;

  addMore = false;

  dinningForm: FormGroup;

  existing;
  alreadyAdded = false;;

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

    this.dataServie.getReportSectionByType(this.rptId, "Dinning-Room")
                    .subscribe(result => {
                      this.existing = result;
                      if(this.existing.length !=0) {
                        this.alreadyAdded = true;                        
                      }

                      console.log('dinningroomt added', this.alreadyAdded);
                    })
    
    this.dinningForm = this.formBuilder.group({
      name: [''],
      type: [''],
      // IN
      conditionIn: this.formBuilder.group({
        cellingCmnts: [''],
        cellingCode: [''],        
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
    this.dinningForm.get('type').setValue('Dinning-Room');
    console.log('add secton form', this.dinningForm.value);
    // call service to add section
    console.log(this.rptId);

    this.dataServie.createSection(this.dinningForm.value, this.rptId);    

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
