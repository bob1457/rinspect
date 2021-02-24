import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StairwellViewEmptyItemComponent } from './stairwell-view-empty-item.component';

describe('StairwellViewEmptyItemComponent', () => {
  let component: StairwellViewEmptyItemComponent;
  let fixture: ComponentFixture<StairwellViewEmptyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StairwellViewEmptyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StairwellViewEmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
