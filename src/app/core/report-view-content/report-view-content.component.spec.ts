import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportViewContentComponent } from './report-view-content.component';

describe('ReportViewContentComponent', () => {
  let component: ReportViewContentComponent;
  let fixture: ComponentFixture<ReportViewContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportViewContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportViewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
