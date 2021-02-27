import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportViewAdditionalContentComponent } from './report-view-additional-content.component';

describe('ReportViewAdditionalContentComponent', () => {
  let component: ReportViewAdditionalContentComponent;
  let fixture: ComponentFixture<ReportViewAdditionalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportViewAdditionalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportViewAdditionalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
