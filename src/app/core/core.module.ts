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
import { InspectionStairwellHallComponent } from './sections/inspection-stairwell-hall/inspection-stairwell-hall.component';
import { InspectionMainBathRoomComponent } from './sections/inspection-main-bath-room/inspection-main-bath-room.component';
import { InspectionMainBedroomComponent } from './sections/inspection-main-bedroom/inspection-main-bedroom.component';
import { InspectionExteriorComponent } from './sections/inspection-exterior/inspection-exterior.component';
import { InspectionUtilityRoomComponent } from './sections/inspection-utility-room/inspection-utility-room.component';
import { InspectionGarbageParkingComponent } from './sections/inspection-garbage-parking/inspection-garbage-parking.component';
import { InspectionMasterBedroomComponent } from './sections/inspection-master-bedroom/inspection-master-bedroom.component';
import { InspectionBasementComponent } from './sections/inspection-basement/inspection-basement.component';
import { InspectionKeysControlsComponent } from './sections/inspection-keys-controls/inspection-keys-controls.component';


@NgModule({
  declarations: [HomeComponent, ReportComponent, AddReportComponent, ReportDetailsComponent, AddSectionComponent, InspectionEntryComponent, InspectionKitchenComponent, InspectionLivingRoomComponent, InspectionDinningRoomComponent, InspectionStairwellHallComponent, InspectionMainBathRoomComponent, InspectionMainBedroomComponent, InspectionExteriorComponent, InspectionUtilityRoomComponent, InspectionGarbageParkingComponent, InspectionMasterBedroomComponent, InspectionBasementComponent, InspectionKeysControlsComponent],
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
