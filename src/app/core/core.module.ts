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
import { SharedModule } from '../shared/common.module';
import { SectionItemComponent } from './sections/section-item/section-item.component';
import { AddSectionEntryComponent } from './add-section-items/add-section-entry/add-section-entry.component';
import { AddSectionKitchenComponent } from './add-section-items/add-section-kitchen/add-section-kitchen.component';
import { AddSectionBasementComponent } from './add-section-items/add-section-basement/add-section-basement.component';
import { AddSectionDinningRoomComponent } from './add-section-items/add-section-dinning-room/add-section-dinning-room.component';
import { AddSectionExteriorComponent } from './add-section-items/add-section-exterior/add-section-exterior.component';
import { AddSectionGarbageParkingComponent } from './add-section-items/add-section-garbage-parking/add-section-garbage-parking.component';
import { AddSectionKeysControlsComponent } from './add-section-items/add-section-keys-controls/add-section-keys-controls.component';
import { AddSectionLivingRoomComponent } from './add-section-items/add-section-living-room/add-section-living-room.component';
import { AddSectionStairewllHallComponent } from './add-section-items/add-section-stairewll-hall/add-section-stairewll-hall.component';
import { AddSectionMasterBedroomComponent } from './add-section-items/add-section-master-bedroom/add-section-master-bedroom.component';
import { AddSectionUtilityRoomComponent } from './add-section-items/add-section-utility-room/add-section-utility-room.component';
import { AddSectionMainBathRoomComponent } from './add-section-items/add-section-main-bath-room/add-section-main-bath-room.component';
// import { AddSectionMainBedroomComponent } from './add-section-items/add-section-main-bedroom/add-section-main-bedroom.component';
import { ReeportViewComponent } from './reeport-view/reeport-view.component';
import { AddSectionOtherComponent } from './add-section-items/add-section-other/add-section-other.component';
import { InspectionOtherComponent } from './sections/inspection-other/inspection-other.component';
import { ReportViewHeaderComponent } from './report-view-header/report-view-header.component';
import { ReportViewContentComponent } from './report-view-content/report-view-content.component';
import { EntryViewItemComponent } from './report-view-content-items/entry-view-item/entry-view-item.component';
import { KitchenViewItemComponent } from './report-view-content-items/kitchen-view-item/kitchen-view-item.component';
import { LivingroomViewItemComponent } from './report-view-content-items/livingroom-view-item/livingroom-view-item.component';
import { DinningroomViewItemComponent } from './report-view-content-items/dinningroom-view-item/dinningroom-view-item.component';
import { BasementViewItemComponent } from './report-view-content-items/basement-view-item/basement-view-item.component';
import { ExteriorViewItemComponent } from './report-view-content-items/exterior-view-item/exterior-view-item.component';
import { GarbageViewItemComponent } from './report-view-content-items/garbage-view-item/garbage-view-item.component';
import { KeysViewItemComponent } from './report-view-content-items/keys-view-item/keys-view-item.component';
import { MainbathroomViewItemComponent } from './report-view-content-items/mainbathroom-view-item/mainbathroom-view-item.component';
import { MaasterbedroomViewItemComponent } from './report-view-content-items/maasterbedroom-view-item/maasterbedroom-view-item.component';
import { StairwellViewItemComponent } from './report-view-content-items/stairwell-view-item/stairwell-view-item.component';
import { UtilityViewItemComponent } from './report-view-content-items/utility-view-item/utility-view-item.component';
import { StorageViewItemComponent } from './report-view-content-items/storage-view-item/storage-view-item.component';
import { GarbageViewEmptyItemComponent } from './report-view-content-items/garbage-view-empty-item/garbage-view-empty-item.component';
import { BasementViewEmptyItemComponent } from './report-view-content-items/basement-view-empty-item/basement-view-empty-item.component';
import { DinningroomViewEmptyItemComponent } from './report-view-content-items/dinningroom-view-empty-item/dinningroom-view-empty-item.component';
import { ExteriorViewEmptyItemComponent } from './report-view-content-items/exterior-view-empty-item/exterior-view-empty-item.component';
import { StairwellViewEmptyItemComponent } from './report-view-content-items/stairwell-view-empty-item/stairwell-view-empty-item.component';
import { StorageViewEmptyItemComponent } from './report-view-content-items/storage-view-empty-item/storage-view-empty-item.component';
import { UtilityViewEmptyItemComponent } from './report-view-content-items/utility-view-empty-item/utility-view-empty-item.component';
import { BedroomViewEmptyItemComponent } from './report-view-content-items/bedroom-view-empty-item/bedroom-view-empty-item.component';
import { ReportViewAdditionalContentComponent } from './report-view-additional-content/report-view-additional-content.component';


@NgModule({
  declarations: [
    HomeComponent,
    ReportComponent,
    AddReportComponent,
    ReportDetailsComponent,
    AddSectionComponent,
    InspectionEntryComponent,
    InspectionKitchenComponent,
    InspectionLivingRoomComponent,
    InspectionDinningRoomComponent,
    InspectionStairwellHallComponent,
    InspectionMainBathRoomComponent,
    InspectionMainBedroomComponent,
    InspectionExteriorComponent,
    InspectionUtilityRoomComponent,
    InspectionGarbageParkingComponent,
    InspectionMasterBedroomComponent,
    InspectionBasementComponent,
    InspectionKeysControlsComponent,
    SectionItemComponent,
    AddSectionEntryComponent,
    AddSectionKitchenComponent,
    AddSectionBasementComponent,
    AddSectionDinningRoomComponent,
    AddSectionExteriorComponent,
    AddSectionGarbageParkingComponent,
    AddSectionKeysControlsComponent,
    AddSectionLivingRoomComponent,    
    AddSectionStairewllHallComponent,
    AddSectionMasterBedroomComponent,
    AddSectionUtilityRoomComponent,
    AddSectionMainBathRoomComponent,
    // AddSectionMainBedroomComponent,
    ReeportViewComponent,
    AddSectionOtherComponent,
    InspectionOtherComponent,
    ReportViewHeaderComponent,
    ReportViewContentComponent,
    EntryViewItemComponent,
    KitchenViewItemComponent,
    LivingroomViewItemComponent,
    DinningroomViewItemComponent,
    BasementViewItemComponent,
    ExteriorViewItemComponent,
    GarbageViewItemComponent,
    KeysViewItemComponent,
    MainbathroomViewItemComponent,
    MaasterbedroomViewItemComponent,
    StairwellViewItemComponent,
    UtilityViewItemComponent,
    StorageViewItemComponent,
    GarbageViewEmptyItemComponent,
    BasementViewEmptyItemComponent,
    DinningroomViewEmptyItemComponent,
    ExteriorViewEmptyItemComponent,
    StairwellViewEmptyItemComponent,
    StorageViewEmptyItemComponent,
    UtilityViewEmptyItemComponent,
    BedroomViewEmptyItemComponent,
    ReportViewAdditionalContentComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    CoreRoutingModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
