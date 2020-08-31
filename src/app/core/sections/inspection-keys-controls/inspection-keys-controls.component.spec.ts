import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionKeysControlsComponent } from './inspection-keys-controls.component';

describe('InspectionKeysControlsComponent', () => {
  let component: InspectionKeysControlsComponent;
  let fixture: ComponentFixture<InspectionKeysControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionKeysControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionKeysControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
