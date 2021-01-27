import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-keys-view-item',
  templateUrl: './keys-view-item.component.html',
  styleUrls: ['./keys-view-item.component.scss']
})
export class KeysViewItemComponent implements OnInit {

  @Input() keyAndControlSectionDetails;
  @Input() reportId;
  
  constructor() { }

  ngOnInit(): void {
  }

}
