import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionKeysLivingRoomComponent } from './add-section-living-room.component';

describe('AddSectionKeysLivingRoomComponent', () => {
  let component: AddSectionKeysLivingRoomComponent;
  let fixture: ComponentFixture<AddSectionKeysLivingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionKeysLivingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionKeysLivingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
