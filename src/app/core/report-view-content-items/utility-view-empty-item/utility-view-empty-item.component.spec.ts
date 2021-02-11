import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityViewEmptyItemComponent } from './utility-view-empty-item.component';

describe('UtilityViewEmptyItemComponent', () => {
  let component: UtilityViewEmptyItemComponent;
  let fixture: ComponentFixture<UtilityViewEmptyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilityViewEmptyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityViewEmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
