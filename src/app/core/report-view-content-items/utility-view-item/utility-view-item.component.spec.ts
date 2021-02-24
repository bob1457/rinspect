import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityViewItemComponent } from './utility-view-item.component';

describe('UtilityViewItemComponent', () => {
  let component: UtilityViewItemComponent;
  let fixture: ComponentFixture<UtilityViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilityViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
