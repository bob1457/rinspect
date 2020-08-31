import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss']
})
export class AddSectionComponent implements OnInit {

  type = '';

  constructor() { }

  ngOnInit(): void {
  }

}
