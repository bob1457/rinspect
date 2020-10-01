import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionExteriorComponent } from './inspection-exterior.component';

describe('InspectionExteriorComponent', () => {
  let component: InspectionExteriorComponent;
  let fixture: ComponentFixture<InspectionExteriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionExteriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionExteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
