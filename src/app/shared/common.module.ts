import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrueFalsePipe } from './true-false.pipe';
import { CodePipe } from './code.pipe';



@NgModule({
  declarations: [TrueFalsePipe, CodePipe],
  imports: [
    CommonModule
  ],
  exports: [
    TrueFalsePipe,
    CodePipe
  ]
})
export class SharedModule { }
