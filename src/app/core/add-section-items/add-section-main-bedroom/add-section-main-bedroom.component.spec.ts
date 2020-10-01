import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionMainBedroomComponent } from './add-section-main-bedroom.component';

describe('AddSectionMainBedroomComponent', () => {
  let component: AddSectionMainBedroomComponent;
  let fixture: ComponentFixture<AddSectionMainBedroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionMainBedroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionMainBedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
