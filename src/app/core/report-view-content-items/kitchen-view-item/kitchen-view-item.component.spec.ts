import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenViewItemComponent } from './kitchen-view-item.component';

describe('KitchenViewItemComponent', () => {
  let component: KitchenViewItemComponent;
  let fixture: ComponentFixture<KitchenViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
