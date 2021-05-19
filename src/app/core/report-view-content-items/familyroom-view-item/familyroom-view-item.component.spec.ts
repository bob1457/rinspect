import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyroomViewItemComponent } from './familyroom-view-item.component';

describe('FamilyroomViewItemComponent', () => {
  let component: FamilyroomViewItemComponent;
  let fixture: ComponentFixture<FamilyroomViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyroomViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyroomViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
