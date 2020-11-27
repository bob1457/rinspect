import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportViewHeaderComponent } from './report-view-header.component';

describe('ReportViewHeaderComponent', () => {
  let component: ReportViewHeaderComponent;
  let fixture: ComponentFixture<ReportViewHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportViewHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
