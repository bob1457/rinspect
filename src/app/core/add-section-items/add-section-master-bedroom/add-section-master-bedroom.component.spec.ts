import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionMasterBedroomComponent } from './add-section-master-bedroom.component';

describe('AddSectionMasterBedroomComponent', () => {
  let component: AddSectionMasterBedroomComponent;
  let fixture: ComponentFixture<AddSectionMasterBedroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionMasterBedroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionMasterBedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
