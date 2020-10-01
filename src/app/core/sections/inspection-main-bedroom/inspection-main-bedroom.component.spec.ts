import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionMainBedroomComponent } from './inspection-main-bedroom.component';

describe('InspectionMainBedroomComponent', () => {
  let component: InspectionMainBedroomComponent;
  let fixture: ComponentFixture<InspectionMainBedroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionMainBedroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionMainBedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
