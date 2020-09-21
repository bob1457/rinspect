import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-section-item',
  templateUrl: './section-item.component.html',
  styleUrls: ['./section-item.component.scss']
})
export class SectionItemComponent implements OnInit {

  // wallForm : FormGroup;
  @Input() entryForm : FormGroup;
  @Input() code;
  @Input() comments;

  @Input() codes;
  @Input() sectionTitle;

  constructor(private fb: FormBuilder, private controlContainer: ControlContainer) { }

  ngOnInit(): void {   

    this.entryForm = <FormGroup>this.controlContainer.control;

    console.log('control from parent', this.code);
    console.log('control from parent', this.comments);
  }

}
