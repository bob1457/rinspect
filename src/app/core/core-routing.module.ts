import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from '../report/report.component';


const routes: Routes = [
  { path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'report', pathMatch: 'full'},
      { path: 'report', component: ReportComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
