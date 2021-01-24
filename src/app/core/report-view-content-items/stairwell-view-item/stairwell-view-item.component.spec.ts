import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StairwellViewItemComponent } from './stairwell-view-item.component';

describe('StairwellViewItemComponent', () => {
  let component: StairwellViewItemComponent;
  let fixture: ComponentFixture<StairwellViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StairwellViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StairwellViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
