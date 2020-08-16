import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  { path: '', component: SigninComponent},
  { path: 'homw', component: HomeComponent},
  { path: 'report', component: ReportComponent},
  { path: 'about', component: AboutComponent},
  { path: '**'   , component: SigninComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
