import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen-view-item',
  templateUrl: './kitchen-view-item.component.html',
  styleUrls: ['./kitchen-view-item.component.scss']
})
export class KitchenViewItemComponent implements OnInit {

  @Input() kitchenSectionDetails: any;
  @Input() reportId: any;

  constructor() { }

  ngOnInit(): void {
  }

}
