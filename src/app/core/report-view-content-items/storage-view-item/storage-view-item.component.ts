import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage-view-item',
  templateUrl: './storage-view-item.component.html',
  styleUrls: ['./storage-view-item.component.scss']
})
export class StorageViewItemComponent implements OnInit {

  @Input() storageOtherSectionDetails;
  @Input() reportId;

  constructor() { }

  ngOnInit(): void {
  }

}
