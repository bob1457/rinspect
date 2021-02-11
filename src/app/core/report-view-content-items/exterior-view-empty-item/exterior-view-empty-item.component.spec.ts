import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorViewEmptyItemComponent } from './exterior-view-empty-item.component';

describe('ExteriorViewEmptyItemComponent', () => {
  let component: ExteriorViewEmptyItemComponent;
  let fixture: ComponentFixture<ExteriorViewEmptyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExteriorViewEmptyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExteriorViewEmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
