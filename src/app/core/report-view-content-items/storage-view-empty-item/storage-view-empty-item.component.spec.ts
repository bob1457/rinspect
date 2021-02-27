import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageViewEmptyItemComponent } from './storage-view-empty-item.component';

describe('StorageViewEmptyItemComponent', () => {
  let component: StorageViewEmptyItemComponent;
  let fixture: ComponentFixture<StorageViewEmptyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageViewEmptyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageViewEmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
