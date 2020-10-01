import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionMasterBedroomComponent } from './inspection-master-bedroom.component';

describe('InspectionMasterBedroomComponent', () => {
  let component: InspectionMasterBedroomComponent;
  let fixture: ComponentFixture<InspectionMasterBedroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionMasterBedroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionMasterBedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
