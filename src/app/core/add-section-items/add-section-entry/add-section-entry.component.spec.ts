import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionEntryComponent } from './add-section-entry.component';

describe('AddSectionEntryComponent', () => {
  let component: AddSectionEntryComponent;
  let fixture: ComponentFixture<AddSectionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
