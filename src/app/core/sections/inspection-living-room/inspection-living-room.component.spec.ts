import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionLivingRoomComponent } from './inspection-living-room.component';

describe('InspectionLivingRoomComponent', () => {
  let component: InspectionLivingRoomComponent;
  let fixture: ComponentFixture<InspectionLivingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionLivingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionLivingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
