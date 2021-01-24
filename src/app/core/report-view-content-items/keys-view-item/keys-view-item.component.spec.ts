import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysViewItemComponent } from './keys-view-item.component';

describe('KeysViewItemComponent', () => {
  let component: KeysViewItemComponent;
  let fixture: ComponentFixture<KeysViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeysViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeysViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
