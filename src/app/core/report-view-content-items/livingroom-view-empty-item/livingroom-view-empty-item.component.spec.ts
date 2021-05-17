import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingroomViewEmptyItemComponent } from './livingroom-view-empty-item.component';

describe('LivingroomViewEmptyItemComponent', () => {
  let component: LivingroomViewEmptyItemComponent;
  let fixture: ComponentFixture<LivingroomViewEmptyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingroomViewEmptyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingroomViewEmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
