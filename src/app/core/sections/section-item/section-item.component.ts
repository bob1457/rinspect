import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-item',
  templateUrl: './section-item.component.html',
  styleUrls: ['./section-item.component.scss']
})
export class SectionItemComponent implements OnInit {

  @Input() codes;
  @Input() sectionTitle;

  constructor() { }

  ngOnInit(): void {
  }

}
