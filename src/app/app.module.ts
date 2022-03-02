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
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/common.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AuthGuard } from './shared/auth.guard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AboutComponent } from './about/about.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask//,
  // StorageBucket
} from '@angular/fire/storage';

// import { Ng7MatBreadcrumbModule } from 'ng7-mat-breadcrumb';

// import { SectionItemComponent } from './core/sections/section-item/section-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ForgotPasswordComponent,
    AboutComponent
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
    // Ng7MatBreadcrumbModule,
    SignaturePadModule,
    ReactiveFormsModule,
    UserModule,
    SharedModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// AngularFireAuthGuard,
