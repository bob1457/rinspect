import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenViewEmptyItemComponent } from './kitchen-view-empty-item.component';

describe('KitchenViewEmptyItemComponent', () => {
  let component: KitchenViewEmptyItemComponent;
  let fixture: ComponentFixture<KitchenViewEmptyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenViewEmptyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenViewEmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
