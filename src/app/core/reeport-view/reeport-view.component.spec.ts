import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReeportViewComponent } from './reeport-view.component';

describe('ReeportViewComponent', () => {
  let component: ReeportViewComponent;
  let fixture: ComponentFixture<ReeportViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReeportViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReeportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
