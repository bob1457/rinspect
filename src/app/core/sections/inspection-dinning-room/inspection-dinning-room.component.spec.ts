import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionDinningRoomComponent } from './inspection-dinning-room.component';

describe('InspectionDinningRoomComponent', () => {
  let component: InspectionDinningRoomComponent;
  let fixture: ComponentFixture<InspectionDinningRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionDinningRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionDinningRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
