import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionKitchenComponent } from './add-section-kitchen.component';

describe('AddSectionKitchenComponent', () => {
  let component: AddSectionKitchenComponent;
  let fixture: ComponentFixture<AddSectionKitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionKitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
