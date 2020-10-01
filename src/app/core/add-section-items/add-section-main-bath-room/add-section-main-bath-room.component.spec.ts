import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionMainBathRoomComponent } from './add-section-main-bath-room.component';

describe('AddSectionMainBathRoomComponent', () => {
  let component: AddSectionMainBathRoomComponent;
  let fixture: ComponentFixture<AddSectionMainBathRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionMainBathRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionMainBathRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
