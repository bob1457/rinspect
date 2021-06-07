import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-diningroom-view-item',
  templateUrl: './second-diningroom-view-item.component.html',
  styleUrls: ['./second-diningroom-view-item.component.scss']
})
export class SecondDiningroomViewItemComponent implements OnInit {

  @Input() seondDinningRoomSectionDetails;
  @Input() reportId;

  constructor() { }

  ngOnInit(): void {
  }

}
