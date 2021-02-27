import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-section-other',
  templateUrl: './add-section-other.component.html',
  styleUrls: ['./add-section-other.component.scss']
})
export class AddSectionOtherComponent implements OnInit {

  floatLabelControl = new FormControl('auto');
  
  otherForm: FormGroup;

  @Input() rptId;

  addMore = false;
  alreadyAdded = false;
  existing;

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

    this.dataServie.getReportSectionByType(this.rptId, "Other")
                    .subscribe(result => {
                      this.existing = result;
                      if(this.existing.length !=0) {
                        this.alreadyAdded = true;                        
                      }

                      if (this.alreadyAdded) {
                        this.otherForm.disable();
                      }

                      console.log('exterior added', this.alreadyAdded);
                    })

    this.otherForm = this.formBuilder.group({
      name: [''],
      type: [''],
      conditionIn: this.formBuilder.group({        
        other1Name: [''],
        other1Code: [''],
        other1Cmnts: [''],
        other2Name: [''],
        other2Code: [''],
        other2Cmnts: [''],
        other3Name: [''],
        other3Code: [''],
        other3Cmnts: [''],
        other4Name: [''],
        other4Code: [''],
        other4Cmnts: ['']
        
      }),
      conditionOut: this.formBuilder.group({
        other1Name: [''],
        other1Code: [''],
        other1Cmnts: [''],
        other2Name: [''],
        other2Code: [''],
        other2Cmnts: [''],
        other3Name: [''],
        other3Code: [''],
        other3Cmnts: [''],
        other4Name: [''],
        other4Code: [''],
        other4Cmnts: ['']
      }),

    });
  }

  submit() {
    this.otherForm.get('type').setValue('Other');
    console.log('add secton form', this.otherForm.value);
    // call service to add section
    console.log(this.rptId);

    this.dataServie.createSection(this.otherForm.value, this.rptId);

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
