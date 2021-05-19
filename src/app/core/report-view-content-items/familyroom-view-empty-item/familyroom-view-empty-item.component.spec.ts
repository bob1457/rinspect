import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyroomViewEmptyItemComponent } from './familyroom-view-empty-item.component';

describe('FamilyroomViewEmptyItemComponent', () => {
  let component: FamilyroomViewEmptyItemComponent;
  let fixture: ComponentFixture<FamilyroomViewEmptyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyroomViewEmptyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyroomViewEmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
