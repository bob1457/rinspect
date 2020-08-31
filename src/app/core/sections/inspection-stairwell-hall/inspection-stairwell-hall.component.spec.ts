import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionStairwellHallComponent } from './inspection-stairwell-hall.component';

describe('InspectionStairwellHallComponent', () => {
  let component: InspectionStairwellHallComponent;
  let fixture: ComponentFixture<InspectionStairwellHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionStairwellHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionStairwellHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
