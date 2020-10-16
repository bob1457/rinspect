import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SigninComponent } from './signin/signin.component';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/common.module';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { SectionItemComponent } from './core/sections/section-item/section-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ForgotPasswordComponent//,
    // SectionItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    CoreModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
