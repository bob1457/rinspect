import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
<<<<<<< HEAD:src/app/core/add-report/add-report.component.spec.ts
=======
>>>>>>> dev
import { AddReportComponent } from './add-report.component';

describe('AddReportComponent', () => {
  let component: AddReportComponent;
  let fixture: ComponentFixture<AddReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReportComponent ]
<<<<<<< HEAD
=======
import { NewUserComponent } from './new-user.component';

describe('NewUserComponent', () => {
  let component: NewUserComponent;
  let fixture: ComponentFixture<NewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserComponent ]
>>>>>>> dev:src/app/user/new-user/new-user.component.spec.ts
=======
>>>>>>> dev
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD
<<<<<<< HEAD:src/app/core/add-report/add-report.component.spec.ts
    fixture = TestBed.createComponent(AddReportComponent);
=======
    fixture = TestBed.createComponent(NewUserComponent);
>>>>>>> dev:src/app/user/new-user/new-user.component.spec.ts
=======
    fixture = TestBed.createComponent(AddReportComponent);
>>>>>>> dev
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
