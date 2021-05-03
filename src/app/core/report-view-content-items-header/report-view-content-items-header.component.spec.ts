import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportViewContentItemsHeaderComponent } from './report-view-content-items-header.component';

describe('ReportViewContentItemsHeaderComponent', () => {
  let component: ReportViewContentItemsHeaderComponent;
  let fixture: ComponentFixture<ReportViewContentItemsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportViewContentItemsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportViewContentItemsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
