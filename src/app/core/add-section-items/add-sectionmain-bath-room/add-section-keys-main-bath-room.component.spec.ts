import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionKeysMainBathRoomComponent } from './add-section-keys-main-bath-room.component';

describe('AddSectionKeysMainBathRoomComponent', () => {
  let component: AddSectionKeysMainBathRoomComponent;
  let fixture: ComponentFixture<AddSectionKeysMainBathRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionKeysMainBathRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionKeysMainBathRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
