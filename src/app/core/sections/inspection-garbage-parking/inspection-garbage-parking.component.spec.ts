import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionGarbageParkingComponent } from './inspection-garbage-parking.component';

describe('InspectionGarbageParkingComponent', () => {
  let component: InspectionGarbageParkingComponent;
  let fixture: ComponentFixture<InspectionGarbageParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionGarbageParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionGarbageParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
