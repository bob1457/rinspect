import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-view-additional-content',
  templateUrl: './report-view-additional-content.component.html',
  styleUrls: ['./report-view-additional-content.component.scss']
})
export class ReportViewAdditionalContentComponent implements OnInit {

  @Input() id;

  @Input() secondBathroom;
  @Input() thirdBathRoom;
  @Input() forthBathroom;
  @Input() familyRoomSection;
  @Input() secondKitchenSection;
  @Input() thirdBedroom;
  @Input() forthBedroom;
  @Input() fiftBedroom;
  @Input() secondEntrySection;

  constructor() { }

  ngOnInit(): void {
  }

}
