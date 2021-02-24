import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basement-view-item',
  templateUrl: './basement-view-item.component.html',
  styleUrls: ['./basement-view-item.component.scss']
})
export class BasementViewItemComponent implements OnInit {

  @Input() basementSectionDetails;
  @Input() reportId;

  constructor() { }

  ngOnInit(): void {
  }

}
