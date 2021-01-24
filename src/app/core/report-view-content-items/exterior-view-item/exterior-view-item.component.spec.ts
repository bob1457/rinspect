import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorViewItemComponent } from './exterior-view-item.component';

describe('ExteriorViewItemComponent', () => {
  let component: ExteriorViewItemComponent;
  let fixture: ComponentFixture<ExteriorViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExteriorViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExteriorViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
