import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen-view-item',
  templateUrl: './kitchen-view-item.component.html',
  styleUrls: ['./kitchen-view-item.component.scss']
})
export class KitchenViewItemComponent implements OnInit {

  @Input() kitchenSectionDetails: any;
  @Input() reportId: any;

  empty = false;

  constructor() { }

  ngOnInit(): void {
    // this.isEmptyString();
  }


  // isEmptyString() {
  //   this.kitchenSectionDetails.conditionOut.cellingCmnts.length == 0 ? this.empty = true :this.empty = false;
  //   console.log('empty', this.empty);
  // }

}
