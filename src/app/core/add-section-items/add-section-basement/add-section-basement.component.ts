import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-section-basement',
  templateUrl: './add-section-basement.component.html',
  styleUrls: ['./add-section-basement.component.scss']
})
export class AddSectionBasementComponent implements OnInit {

  floatLabelControl = new FormControl('auto');

  @Input() rptId;

  addMore = false;

  basementForm: FormGroup;

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

    this.dataServie.getReportSectionByType(this.rptId, "Basement")
                    .subscribe(result => {
                      this.existing = result;
                      if(this.existing.length !=0) {
                        this.alreadyAdded = true; 
                        this.basementForm.disable();
                      }

                      console.log('basement added', this.alreadyAdded);
                    })
    
    this.basementForm = this.formBuilder.group({
      name: [''],
      type: [''],
      // IN
      conditionIn: this.formBuilder.group({
        stairWayCode: [''],
        stairWayCmnts: [''],
        wallAndCarpetCode: [''],
        wallAndCarpetCmnts: [''],
        furnaceWaterPlumbingCode: [''],
        furnaceWaterPlumbingCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],        
        lightingCmnts: [''],
        lightingCode: [''],        
        windowsCmnts: [''],
        windowsCode: [''],
        otherCode: [''],
        otherCmnts: ['']
      }),
      //- OUT 

      conditionOut: this.formBuilder.group({
        stairWayCode: [''],
        stairWayCmnts: [''],
        wallAndCarpetCode: [''],
        wallAndCarpetCmnts: [''],
        furnaceWaterPlumbingCode: [''],
        furnaceWaterPlumbingCmnts: [''],
        electricCmnts: [''],
        electricCode: [''],        
        lightingCmnts: [''],
        lightingCode: [''],        
        windowsCmnts: [''],
        windowsCode: [''],
        otherCode: [''],
        otherCmnts: ['']
      })
      
      

    })
  }

  submit() {
    this.basementForm.get('type').setValue('Basement');
    console.log('add secton form', this.basementForm.value);
    // call service to add section
    console.log(this.rptId);

    this.dataServie.createSection(this.basementForm.value, this.rptId);    

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
