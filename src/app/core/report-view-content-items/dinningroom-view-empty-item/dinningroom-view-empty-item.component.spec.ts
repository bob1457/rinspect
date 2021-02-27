import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinningroomViewEmptyItemComponent } from './dinningroom-view-empty-item.component';

describe('DinningroomViewEmptyItemComponent', () => {
  let component: DinningroomViewEmptyItemComponent;
  let fixture: ComponentFixture<DinningroomViewEmptyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinningroomViewEmptyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinningroomViewEmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
