import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionBasementComponent } from './inspection-basement.component';

describe('InspectionBasementComponent', () => {
  let component: InspectionBasementComponent;
  let fixture: ComponentFixture<InspectionBasementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionBasementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionBasementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
