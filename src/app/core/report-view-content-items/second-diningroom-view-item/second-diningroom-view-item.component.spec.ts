import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDiningroomViewItemComponent } from './second-diningroom-view-item.component';

describe('SecondDiningroomViewItemComponent', () => {
  let component: SecondDiningroomViewItemComponent;
  let fixture: ComponentFixture<SecondDiningroomViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondDiningroomViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondDiningroomViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
