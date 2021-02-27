import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroomViewEmptyItemComponent } from './bedroom-view-empty-item.component';

describe('BedroomViewEmptyItemComponent', () => {
  let component: BedroomViewEmptyItemComponent;
  let fixture: ComponentFixture<BedroomViewEmptyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedroomViewEmptyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedroomViewEmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
