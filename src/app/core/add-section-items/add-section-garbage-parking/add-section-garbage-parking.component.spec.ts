import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionGarbageParkingComponent } from './add-section-garbage-parking.component';

describe('AddSectionGarbageParkingComponent', () => {
  let component: AddSectionGarbageParkingComponent;
  let fixture: ComponentFixture<AddSectionGarbageParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionGarbageParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionGarbageParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
