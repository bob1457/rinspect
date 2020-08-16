import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: SigninComponent},

  { path: 'about', component: AboutComponent},
  { path: '*'   , component: SigninComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
