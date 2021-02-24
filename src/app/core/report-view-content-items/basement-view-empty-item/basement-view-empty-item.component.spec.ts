import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasementViewEmptyItemComponent } from './basement-view-empty-item.component';

describe('BasementViewEmptyItemComponent', () => {
  let component: BasementViewEmptyItemComponent;
  let fixture: ComponentFixture<BasementViewEmptyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasementViewEmptyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasementViewEmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
