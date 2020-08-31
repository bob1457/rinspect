import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionUtilityRoomComponent } from './inspection-utility-room.component';

describe('InspectionUtilityRoomComponent', () => {
  let component: InspectionUtilityRoomComponent;
  let fixture: ComponentFixture<InspectionUtilityRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionUtilityRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionUtilityRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
