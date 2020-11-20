import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss']
})
export class AddSectionComponent implements OnInit {

  type = '';
  id;

  constructor(private actRoute: ActivatedRoute) { 
    this.actRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(params.get('id'));
    });
  }

  ngOnInit(): void {
  }

}
