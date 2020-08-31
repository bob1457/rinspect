import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inspection-kitchen',
  templateUrl: './inspection-kitchen.component.html',
  styleUrls: ['./inspection-kitchen.component.scss']
})
export class InspectionKitchenComponent implements OnInit {

  addMore = false;
  addForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['']
    });
  }

  checked(event) {
    // console.log(event);
    this.addMore = event.checked;
    console.log(this.addMore); 
  }

  submit() {
    if(this.addMore){
      this.addForm.reset();
      // this.router.navigate(['/home/addsection']);      
      this.addMore = false;
    } else {
      this.reloadComponent();
    }
    
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/home/addsection']);
  }

}
