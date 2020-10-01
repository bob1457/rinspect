import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionKitchenComponent } from './inspection-kitchen.component';

describe('InspectionKitchenComponent', () => {
  let component: InspectionKitchenComponent;
  let fixture: ComponentFixture<InspectionKitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionKitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
