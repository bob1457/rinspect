import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility-view-item',
  templateUrl: './utility-view-item.component.html',
  styleUrls: ['./utility-view-item.component.scss']
})
export class UtilityViewItemComponent implements OnInit {
  
  @Input() utilityRoomectionDetails;
  @Input() reportId;

  constructor() { }

  ngOnInit(): void {
  }

}
