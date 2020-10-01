import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionBasementComponent } from './add-section-basement.component';

describe('AddSectionBasementComponent', () => {
  let component: AddSectionBasementComponent;
  let fixture: ComponentFixture<AddSectionBasementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionBasementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionBasementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
