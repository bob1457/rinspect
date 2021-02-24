import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-garbage-view-item',
  templateUrl: './garbage-view-item.component.html',
  styleUrls: ['./garbage-view-item.component.scss']
})
export class GarbageViewItemComponent implements OnInit {

  @Input() garbageSectionDetails;
  @Input() reportId;

  constructor() { }

  ngOnInit(): void {
  }

}
