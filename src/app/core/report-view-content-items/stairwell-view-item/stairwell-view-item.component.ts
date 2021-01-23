import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stairwell-view-item',
  templateUrl: './stairwell-view-item.component.html',
  styleUrls: ['./stairwell-view-item.component.scss']
})
export class StairwellViewItemComponent implements OnInit {

  @Input() stairwellSectionDetails;
  @Input() reportId;

  constructor() { }

  ngOnInit(): void {
  }

}
