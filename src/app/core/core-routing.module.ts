import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from '../core/report/report.component';
import { AddReportComponent } from './add-report/add-report.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { UserSettingsComponent } from '../user/user-settings/user-settings.component';
import { AddSectionComponent } from './add-section/add-section.component';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AuthGuard } from '../shared/auth.guard';
import { ReeportViewComponent } from './reeport-view/reeport-view.component';
import { AboutComponent } from '../about/about.component';

const rediretUnauthoirzedToLogin = () => redirectUnauthorizedTo(['']);
// canActivate: [AuthGuard]
const routes: Routes = [
  { path: 'home',
    component: HomeComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: rediretUnauthoirzedToLogin},
    children: [
      { path: '', redirectTo: 'report', pathMatch: 'full'},
      { path: 'add', component: AddReportComponent},

      { path: 'report-details', component: ReportDetailsComponent},

      { path: 'report-details/:id', component: ReportDetailsComponent},
      { path: 'addsection', component: AddSectionComponent},
      { path: 'user/:id', component:UserProfileComponent},
      // { path: 'user', component:UserProfileComponent},
      { path: 'settings', component: UserSettingsComponent},
      { path: 'about', component: AboutComponent},
      // { path: 'report', component: ReportComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: rediretUnauthoirzedToLogin}},
      { path: 'report', component: ReportComponent},
      { path: 'report-view/:id', component: ReeportViewComponent},
      { path: 'addSection/:id', component: AddSectionComponent}

    ]
  }
];
// , canActivate: [AngularFireAuthGuard],
      // data: { authGuardPipe: rediretUnauthoirzedToLogin},
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
