import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrueFalsePipe } from './true-false.pipe';
import { CodePipe } from './code.pipe';
import { EmptyPipe } from './empty.pipe';



@NgModule({
  declarations: [TrueFalsePipe, CodePipe, EmptyPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TrueFalsePipe,
    CodePipe,
    EmptyPipe
  ]
})
export class SharedModule { }
