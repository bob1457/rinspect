import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportViewContentFooterComponent } from './report-view-content-footer.component';

describe('ReportViewContentFooterComponent', () => {
  let component: ReportViewContentFooterComponent;
  let fixture: ComponentFixture<ReportViewContentFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportViewContentFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportViewContentFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
