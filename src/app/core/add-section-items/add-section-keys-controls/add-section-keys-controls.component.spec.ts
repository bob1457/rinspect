import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionKeysControlsComponent } from './add-section-keys-controls.component';

describe('AddSectionKeysControlsComponent', () => {
  let component: AddSectionKeysControlsComponent;
  let fixture: ComponentFixture<AddSectionKeysControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionKeysControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionKeysControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
