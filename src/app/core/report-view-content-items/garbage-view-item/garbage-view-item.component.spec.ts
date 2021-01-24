import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageViewItemComponent } from './garbage-view-item.component';

describe('GarbageViewItemComponent', () => {
  let component: GarbageViewItemComponent;
  let fixture: ComponentFixture<GarbageViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarbageViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarbageViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
