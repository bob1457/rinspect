import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionEntryComponent } from './inspection-entry.component';

describe('InspectionEntryComponent', () => {
  let component: InspectionEntryComponent;
  let fixture: ComponentFixture<InspectionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
