import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionMainBathRoomComponent } from './inspection-main-bath-room.component';

describe('InspectionMainBathRoomComponent', () => {
  let component: InspectionMainBathRoomComponent;
  let fixture: ComponentFixture<InspectionMainBathRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionMainBathRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionMainBathRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
