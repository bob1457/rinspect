import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-livingroom-view-item',
  templateUrl: './livingroom-view-item.component.html',
  styleUrls: ['./livingroom-view-item.component.scss']
})
export class LivingroomViewItemComponent implements OnInit {

  @Input() livingRoomSectionDetails;
  @Input() reportId;

  constructor() { }

  ngOnInit(): void {
  }

}
