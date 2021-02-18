import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-report-view-content',
  templateUrl: './report-view-content.component.html',
  styleUrls: ['./report-view-content.component.scss']
})
export class ReportViewContentComponent implements OnInit {

  id;
  report;
  sections;
  additionalSections = false;

  final = false;
  notAgree = '';
  notAgree1 = '';
  agreeOk = false;

  possessionDate;
  moveOutDate;
  moveInInsDate;
  moveOutInsDaste;

  type = '';

  // All sections
  entrySection;
  kitchenSection;
  livingRoomSection;
  diningRoomSEction;
  stairwellSection;
  mainBathroomSection;
  masterBedroomSection;
  secondBedroomSection;
  exteriorSection;
  utilitySection;
  garbageParkingSection;
  basementSection;
  keyControlSection;
  otherSection;

  secondBathroom;
  thirdBathRoom;
  forthBathroom;

  secondEntrySection;


  
  constructor(private actRoute: ActivatedRoute,
              public dataService: DataService) {
                this.actRoute.paramMap.subscribe(params => {
                  this.id = params.get('id');
                  console.log('id in view',params.get('id'));
                });
               }

  ngOnInit(): void {

    let bathroomSubType = {       
      'S':'Second Bathroom',
      'T':'Third Bathroom',
      'F':'Forth Bathroom',
      // 'E':'SecondaryEntry'
    }

    // Get report details
    this.dataService.getReportDetails(this.id)
        .subscribe(res => {
          this.report = res;
          // this.possessionDate = this.report.possesionDate.toDate().getDate() + "          " + this.report.possesionDate.toDate().getMonth() +  "             " +  this.report.possesionDate.toDate().getFullYear();
          this.possessionDate = "  " + this.getDate(this.report.possesionDate)  + "       " + this.getMonth(this.report.possesionDate) +  "        " +  this.report.possesionDate.toDate().getFullYear();

          if(this.report.moveOutInspectDate) {
             this.moveOutInsDaste = "  " + this.getDate(this.report.moveOutInspectDate)  + "       " + this.getMonth(this.report.moveOutInspectDate) +  "        " +  this.report.moveOutInspectDate.toDate().getFullYear();
          } else {
            this.moveOutInsDaste = "";
          }

          this.moveInInsDate = "  " + this.getDate(this.report.moveInInspectDate)  + "       " + this.getMonth(this.report.moveInInspectDate) +  "        " +  this.report.moveInInspectDate.toDate().getFullYear();
         
          if(this.report.moveOutDate) {
            this.moveOutDate = "  " + this.getDate(this.report.moveOutDate)  + "       " + this.getMonth(this.report.moveOutDate) +  "        " +  this.report.moveOutDate.toDate().getFullYear();
          } else {
            this.moveOutDate = "";
          }
          
          console.log('rpt', this.report)
          console.log('possesiion date', this.possessionDate);
          
        })

    // Get each section   
    
    this.dataService.getReportViewSectionBySubType(this.id, 'MainEntry')
        .subscribe( res => {
          res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            this.entrySection = data;
            console.log('main section view', this.entrySection);
            return {id, ...data}
          } )
        })

    this.dataService.getReportViewSectionBySubType(this.id, 'MainKitchen')
        .subscribe( res => {
          res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            this.kitchenSection = data;
            console.log('main kitchen view', this.kitchenSection);
            return {id, ...data}
          } )
        })

    this.dataService.getReportViewSectionBySubType(this.id, 'LivingRoom')
        .subscribe( res => {
          res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            this.livingRoomSection = data;
            console.log('Livingroom view', this.livingRoomSection);
            return {id, ...data}
          } )
        })

    this.dataService.getReportViewSectionByType(this.id, 'Dinning-Room')
        .subscribe( res => {
          res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            this.diningRoomSEction = data;
            console.log('Dinning room view', this.diningRoomSEction);
            return {id, ...data}
          } )
        })

        this.dataService.getReportViewSectionByType(this.id, 'Stairwell')
        .subscribe( res => {
          res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            this.stairwellSection = data;
            console.log('Stairewell view', this.stairwellSection);
            return {id, ...data}
          } )
        })

        this.dataService.getReportViewSectionBySubType(this.id, 'Main Bathroom')
        .subscribe( res => {
          res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            this.mainBathroomSection = data;
            console.log('Main Bathroom view', this.mainBathroomSection);
            return {id, ...data}
          } )
        })

        this.dataService.getReportViewSectionBySubType(this.id, 'Master Bedroom')
        .subscribe( res => {
          res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            this.masterBedroomSection = data;
            console.log('Master Bedroom view', this.masterBedroomSection);
            return {id, ...data}
          } )
        })

        this.dataService.getReportViewSectionBySubType(this.id, 'Second Bedroom')
        .subscribe( res => {
          res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            this.secondBedroomSection = data;
            console.log('Second Bedroom view', this.secondBedroomSection);
            return {id, ...data}
          } )
        })

        // Extract all bedrooms to find out how many hedrooms are avaiable

        //

        this.dataService.getReportViewSectionByType(this.id, 'Exterior')
        .subscribe( res => {
          res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            this.exteriorSection = data;
            console.log('Exterior view', this.exteriorSection);
            return {id, ...data}
          } )
        })

        this.dataService.getReportViewSectionByType(this.id, 'Utility-Room')
        .subscribe( res => {
          res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            this.utilitySection = data;
            console.log('Utility room view', this.utilitySection);
            return {id, ...data}
          } )
        })

        this.dataService.getReportViewSectionByType(this.id, 'Garbage-Parking')
        .subscribe( res => {
          res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            this.garbageParkingSection = data;
            console.log('Utility room view', this.garbageParkingSection);
            return {id, ...data}
          } )
        })

        this.dataService.getReportViewSectionByType(this.id, 'Basement')
        .subscribe( res => {
          res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            this.basementSection = data;
            console.log('Basement view', this.basementSection);
            return {id, ...data}
          } )
        })

        this.dataService.getReportViewSectionByType(this.id, 'Other')
        .subscribe( res => {
          res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            this.otherSection = data;
            console.log('Storage/Other view', this.otherSection);
            return {id, ...data}
          } )
        })

        this.dataService.getReportViewSectionByType(this.id, 'Key-Control')
        .subscribe( res => {
          res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            this.keyControlSection = data;
            console.log('Storage/Other view', this.keyControlSection);
            return {id, ...data}
          } )
        })


    // Get additional Sections




    for (let [key, value] of Object.entries(bathroomSubType)) {
      this.dataService.getReportSectionBySubType(this.id, value)
          .subscribe( res => {
            if(res.length > 0) {
              // key = key + "Y";
              this.additionalSections = true;
              switch (key) {                
                case 'S':
                  res.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    this.secondBathroom = data;
                    console.log('2nd Bathroom view', this.secondBathroom);
                    return {id, ...data}
                  } )                 
                  break;
                case 'T':
                  res.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    this.thirdBathRoom = data;
                    console.log('3rd Bathroom view', this.thirdBathRoom);
                    return {id, ...data} 
                  } )
                  break;
                case 'F':
                  res.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    this.forthBathroom = data;
                    console.log('4th Bathroom view', this.forthBathroom);
                    return {id, ...data} 
                  } )
                  break;
                  case 'E':
                    res.map(a => {
                      const data = a.payload.doc.data();
                      const id = a.payload.doc.id;
                      this.secondEntrySection = data;
                      console.log('2nd Entry view', this.secondEntrySection);
                      return {id, ...data} 
                    } )
                    break;                
                default:
                  break;
              }
              // if(this.secondEntrySection || this.secondBathroom || this.thirdBathRoom  || this.forthBathroom) {
              //   this.additionalSections = true;
              // }
            // } else {
            //   // key = key + "N";
            //   switch (key) {
            //     case 'M':
            //       this.mainBathExists = false;
            //       break;
            //     case 'S':
            //       this.secondBathExists = false;
            //       break;
            //     case 'T':
            //       this.thirdBathExists = false;
            //       break;
            //     case 'F':
            //       this.forthBathExists = false;
            //       break;                
            //     default:
            //       break;
            //   }
              // console.log('status:', key);
              // console.log(value + ' not exists');
            }
           
          })
    }

    // if(this.secondEntrySection || this.secondBathroom || this.thirdBathRoom  || this.forthBathroom) {
    //   this.additionalSections = true;
    // }

    
  }

  private getDate(date:any): string {
    const d = date.toDate().getDate().toString();
    const formatedDate = d.length < 2 ? '0' + d : d;

    return formatedDate;
  }

  private getMonth(date:any): string {
    const m = date.toDate().getMonth().toString();
    const formatedM = m.length < 2 ? '0' + m : m;

    return formatedM;
  }

}
