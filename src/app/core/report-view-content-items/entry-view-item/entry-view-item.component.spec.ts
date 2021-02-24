import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryViewItemComponent } from './entry-view-item.component';

describe('EntryViewItemComponent', () => {
  let component: EntryViewItemComponent;
  let fixture: ComponentFixture<EntryViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
