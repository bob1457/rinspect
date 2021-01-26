import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainbathroom-view-item',
  templateUrl: './mainbathroom-view-item.component.html',
  styleUrls: ['./mainbathroom-view-item.component.scss']
})
export class MainbathroomViewItemComponent implements OnInit {

  @Input() mainBathroomSectionDetails: any;
  @Input() reportId: any;

  constructor() { }

  ngOnInit(): void {
  }

}
