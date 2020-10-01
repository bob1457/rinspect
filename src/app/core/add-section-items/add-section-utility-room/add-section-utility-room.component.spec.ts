import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionUtilityRoomComponent } from './add-section-utility-room.component';

describe('AddSectionUtilityRoomComponent', () => {
  let component: AddSectionUtilityRoomComponent;
  let fixture: ComponentFixture<AddSectionUtilityRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionUtilityRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionUtilityRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
