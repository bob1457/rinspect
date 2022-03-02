import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrueFalsePipe } from './true-false.pipe';
import { CodePipe } from './code.pipe';
import { EmptyPipe } from './empty.pipe';
import { LoadingComponent } from './loading/loading.component';

// import { RouterModule } from '@angular/router';
// import { Ng7MatBreadcrumbModule } from 'ng7-mat-breadcrumb';



@NgModule({
  declarations: [TrueFalsePipe, CodePipe, EmptyPipe, LoadingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TrueFalsePipe,
    CodePipe,
    EmptyPipe,
    LoadingComponent
  ]
})
export class SharedModule { }
