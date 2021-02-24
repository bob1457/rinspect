import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageViewEmptyItemComponent } from './garbage-view-empty-item.component';

describe('GarbageViewEmptyItemComponent', () => {
  let component: GarbageViewEmptyItemComponent;
  let fixture: ComponentFixture<GarbageViewEmptyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarbageViewEmptyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarbageViewEmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
