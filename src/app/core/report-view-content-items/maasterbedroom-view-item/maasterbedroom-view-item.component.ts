import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-maasterbedroom-view-item',
  templateUrl: './maasterbedroom-view-item.component.html',
  styleUrls: ['./maasterbedroom-view-item.component.scss']
})
export class MaasterbedroomViewItemComponent implements OnInit {

  @Input() masterBedroomSectionDetails;
  @Input() reportId;

  constructor() { }

  ngOnInit(): void {
  }

}
