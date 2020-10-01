import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionDinningRoomComponent } from './add-section-dinning-room.component';

describe('AddSectionDinningRoomComponent', () => {
  let component: AddSectionDinningRoomComponent;
  let fixture: ComponentFixture<AddSectionDinningRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionDinningRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionDinningRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
