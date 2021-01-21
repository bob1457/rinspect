import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaasterbedroomViewItemComponent } from './maasterbedroom-view-item.component';

describe('MaasterbedroomViewItemComponent', () => {
  let component: MaasterbedroomViewItemComponent;
  let fixture: ComponentFixture<MaasterbedroomViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaasterbedroomViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaasterbedroomViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
