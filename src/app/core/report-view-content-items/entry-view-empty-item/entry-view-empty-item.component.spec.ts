import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryViewEmptyItemComponent } from './entry-view-empty-item.component';

describe('EntryViewEmptyItemComponent', () => {
  let component: EntryViewEmptyItemComponent;
  let fixture: ComponentFixture<EntryViewEmptyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryViewEmptyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryViewEmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
