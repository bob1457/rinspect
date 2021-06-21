import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomViewEmptyItemComponent } from './bathroom-view-empty-item.component';

describe('BathroomViewEmptyItemComponent', () => {
  let component: BathroomViewEmptyItemComponent;
  let fixture: ComponentFixture<BathroomViewEmptyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BathroomViewEmptyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BathroomViewEmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
