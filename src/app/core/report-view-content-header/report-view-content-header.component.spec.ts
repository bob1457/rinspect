import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportViewContentHeaderComponent } from './report-view-content-header.component';

describe('ReportViewContentHeaderComponent', () => {
  let component: ReportViewContentHeaderComponent;
  let fixture: ComponentFixture<ReportViewContentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportViewContentHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportViewContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
