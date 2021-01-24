import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinningroom-view-item',
  templateUrl: './dinningroom-view-item.component.html',
  styleUrls: ['./dinningroom-view-item.component.scss']
})
export class DinningroomViewItemComponent implements OnInit {

  @Input() dinningRoomSectionDetails;
  @Input() reportId;

  constructor() { }

  ngOnInit(): void {
  }

}
