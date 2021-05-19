import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-familyroom-view-item',
  templateUrl: './familyroom-view-item.component.html',
  styleUrls: ['./familyroom-view-item.component.scss']
})
export class FamilyroomViewItemComponent implements OnInit {

  @Input() familyRoomSectionDetails: any;
  @Input() reportId: any;
  constructor() { }

  ngOnInit(): void {
  }

}
