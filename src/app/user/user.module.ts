import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../app-material/app-material.module';


@NgModule({
  declarations: [
    NewUserComponent, 
    UserProfileComponent, 
    UserSettingsComponent],
  imports: [
    AppMaterialModule,
    CommonModule,
    UserRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
