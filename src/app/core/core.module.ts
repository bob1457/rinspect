import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddReportComponent } from './add-report/add-report.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSectionComponent } from './add-section/add-section.component';
import { InspectionEntryComponent } from './sections/inspection-entry/inspection-entry.component';
import { InspectionKitchenComponent } from './sections/inspection-kitchen/inspection-kitchen.component';
import { InspectionLivingRoomComponent } from './sections/inspection-living-room/inspection-living-room.component';
import { InspectionDinningRoomComponent } from './sections/inspection-dinning-room/inspection-dinning-room.component';


@NgModule({
  declarations: [HomeComponent, ReportComponent, AddReportComponent, ReportDetailsComponent, AddSectionComponent, InspectionEntryComponent, InspectionKitchenComponent, InspectionLivingRoomComponent, InspectionDinningRoomComponent],
  imports: [
    AppMaterialModule,
    CommonModule,
    CoreRoutingModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
