import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasementViewItemComponent } from './basement-view-item.component';

describe('BasementViewItemComponent', () => {
  let component: BasementViewItemComponent;
  let fixture: ComponentFixture<BasementViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasementViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasementViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
