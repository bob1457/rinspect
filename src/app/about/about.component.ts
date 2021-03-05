import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  showMore = false;

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    this.showMore = true;
  }

  hide() {
    this.showMore = false;
  }

}
