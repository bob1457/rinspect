import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionOtherComponent } from './add-section-other.component';

describe('AddSectionOtherComponent', () => {
  let component: AddSectionOtherComponent;
  let fixture: ComponentFixture<AddSectionOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
