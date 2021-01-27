import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss']
})
export class AddSectionComponent implements OnInit {

  type = '';
  id;
  report;

  addButtons = [
    {'img': '../../../assets/images/entry.png', 'caption': 'Entrance', 'type': 'entry'},
    {'img': '../../../assets/images/kitchen.png', 'caption': 'Kitchen', 'type': 'kitchen'},
    {'img': '../../../assets/images/Livingroom.png', 'caption': 'Livingroom', 'type': 'livingroom'},
    {'img': '../../../assets/images/dinining.png', 'caption': 'Dinining', 'type': 'dinning'},
    {'img': '../../../assets/images/stairs.png', 'caption': 'Stairewell', 'type': 'stair'},
    {'img': '../../../assets/images/bathroom.png', 'caption': 'Bathroom', 'type': 'bathroom'},
    {'img': '../../../assets/images/bedroom.png', 'caption': 'Bedroomo', 'type': 'bedroom'},
    {'img': '../../../assets/images/exterior_house.png', 'caption': 'Exterior', 'type': 'exterior'},
    {'img': '../../../assets/images/dryer.png', 'caption': 'Utility', 'type': 'utility'},
    {'img': '../../../assets/images/garage.png', 'caption': 'Gabg/Parking', 'type': 'garbage'},
    {'img': '../../../assets/images/basement.png', 'caption': 'Basement', 'type': 'basement'},
    {'img': '../../../assets/images/keys.png', 'caption': 'Key/Controls', 'type': 'key'},
    {'img': '../../../assets/images/storage.png', 'caption': 'Storage', 'type': 'storage'}
  ]

  constructor(private actRoute: ActivatedRoute,
              private dataService: DataService) { 
    this.actRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(params.get('id'));
    });
  }

  ngOnInit(): void {
    this.dataService.getReportDetails(this.id)
        .subscribe(res => {
          if(res){
            this.report = res;
          }
          

        })
  }

  changeType(value) {
    this.type = value;
    console.log('type', this.type)
  }

}
