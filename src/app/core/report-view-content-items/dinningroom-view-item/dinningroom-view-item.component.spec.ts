import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinningroomViewItemComponent } from './dinningroom-view-item.component';

describe('DinningroomViewItemComponent', () => {
  let component: DinningroomViewItemComponent;
  let fixture: ComponentFixture<DinningroomViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinningroomViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinningroomViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
