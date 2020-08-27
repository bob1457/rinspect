import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from '../core/report/report.component';
import { AddReportComponent } from './add-report/add-report.component';
import { ReportDetailsComponent } from './report-details/report-details.component';


const routes: Routes = [
  { path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'report', pathMatch: 'full'},
      { path: 'add', component: AddReportComponent},
      { path: 'report-details/:id', component: ReportDetailsComponent},
      { path: 'report', component: ReportComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }