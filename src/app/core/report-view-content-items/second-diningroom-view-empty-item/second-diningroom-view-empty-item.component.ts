import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-diningroom-view-empty-item',
  templateUrl: './second-diningroom-view-empty-item.component.html',
  styleUrls: ['./second-diningroom-view-empty-item.component.scss']
})
export class SecondDiningroomViewEmptyItemComponent implements OnInit {

  @Input() seondDinningRoomSectionDetails;
  @Input() reportId;

  constructor() { }

  ngOnInit(): void {
  }

}
