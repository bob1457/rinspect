import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-maasterbedroom-view-item',
  templateUrl: './maasterbedroom-view-item.component.html',
  styleUrls: ['./maasterbedroom-view-item.component.scss']
})
export class MaasterbedroomViewItemComponent implements OnInit {

  @Input() masterBedroomSectionDetails;
  @Input() reportId;
  @Input() isMaster;
  @Input() bedroomNo;

  constructor() { }

  ngOnInit(): void {
  }

}
