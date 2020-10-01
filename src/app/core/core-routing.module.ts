import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from '../core/report/report.component';
import { AddReportComponent } from './add-report/add-report.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
<<<<<<< HEAD
=======
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { UserSettingsComponent } from '../user/user-settings/user-settings.component';
import { AddSectionComponent } from './add-section/add-section.component';
>>>>>>> dev


const routes: Routes = [
  { path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'report', pathMatch: 'full'},
      { path: 'add', component: AddReportComponent},
<<<<<<< HEAD
      { path: 'report-details', component: ReportDetailsComponent},
=======
      { path: 'report-details/:id', component: ReportDetailsComponent},
      { path: 'addsection', component: AddSectionComponent},
      { path: 'user/:id', component:UserProfileComponent},
      // { path: 'user', component:UserProfileComponent},
      { path: 'settings', component: UserSettingsComponent},
>>>>>>> dev
      { path: 'report', component: ReportComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
