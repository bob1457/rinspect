import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingroomViewItemComponent } from './livingroom-view-item.component';

describe('LivingroomViewItemComponent', () => {
  let component: LivingroomViewItemComponent;
  let fixture: ComponentFixture<LivingroomViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingroomViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingroomViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
