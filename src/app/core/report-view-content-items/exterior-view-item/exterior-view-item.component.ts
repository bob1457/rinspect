import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exterior-view-item',
  templateUrl: './exterior-view-item.component.html',
  styleUrls: ['./exterior-view-item.component.scss']
})
export class ExteriorViewItemComponent implements OnInit {

  @Input() exteriorSectionDetails;
  @Input() reportId;

  constructor() { }

  ngOnInit(): void {
  }

}
