import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageViewItemComponent } from './storage-view-item.component';

describe('StorageViewItemComponent', () => {
  let component: StorageViewItemComponent;
  let fixture: ComponentFixture<StorageViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
