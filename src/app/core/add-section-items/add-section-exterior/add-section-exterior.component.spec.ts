import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionExteriorComponent } from './add-section-exterior.component';

describe('AddSectionExteriorComponent', () => {
  let component: AddSectionExteriorComponent;
  let fixture: ComponentFixture<AddSectionExteriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionExteriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionExteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
