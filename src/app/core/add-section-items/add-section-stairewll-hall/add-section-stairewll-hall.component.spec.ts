import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionStairewllHallComponent } from './add-section-stairewll-hall.component';

describe('AddSectionStairewllHallComponent', () => {
  let component: AddSectionStairewllHallComponent;
  let fixture: ComponentFixture<AddSectionStairewllHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionStairewllHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionStairewllHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
