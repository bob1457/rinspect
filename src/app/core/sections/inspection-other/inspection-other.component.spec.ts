import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionOtherComponent } from './inspection-other.component';

describe('InspectionOtherComponent', () => {
  let component: InspectionOtherComponent;
  let fixture: ComponentFixture<InspectionOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
