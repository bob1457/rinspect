import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbathroomViewItemComponent } from './mainbathroom-view-item.component';

describe('MainbathroomViewItemComponent', () => {
  let component: MainbathroomViewItemComponent;
  let fixture: ComponentFixture<MainbathroomViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainbathroomViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainbathroomViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
