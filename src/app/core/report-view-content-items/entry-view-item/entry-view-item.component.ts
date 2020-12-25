import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-entry-view-item',
  templateUrl: './entry-view-item.component.html',
  styleUrls: ['./entry-view-item.component.scss']
})
export class EntryViewItemComponent implements OnInit {

  @Input() entrySectionDetails;
  @Input() reportId;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {    

  }

}
