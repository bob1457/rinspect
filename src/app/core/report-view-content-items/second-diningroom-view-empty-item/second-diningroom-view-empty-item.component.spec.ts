import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDiningroomViewEmptyItemComponent } from './second-diningroom-view-empty-item.component';

describe('SecondDiningroomViewEmptyItemComponent', () => {
  let component: SecondDiningroomViewEmptyItemComponent;
  let fixture: ComponentFixture<SecondDiningroomViewEmptyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondDiningroomViewEmptyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondDiningroomViewEmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
