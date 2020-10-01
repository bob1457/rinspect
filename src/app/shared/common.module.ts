import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrueFalsePipe } from './true-false.pipe';



@NgModule({
  declarations: [TrueFalsePipe],
  imports: [
    CommonModule
  ],
  exports: [
    TrueFalsePipe
  ]
})
export class SharedModule { }
