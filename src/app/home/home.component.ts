import { Component, inject, OnInit } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  filterResults(text: string) {
    if(!text){
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => 
      housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  //housingService: HousingService = inject(HousingService);

  //constructor(private housingService: HousingService) {}

  constructor(private housingService: HousingService){
    this.housingService.getAllHousingLocations().then((housingLocationList: 
      HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = this.housingLocationList;
    });
  }

  ngOnInit(): void {
    this.housingLocationList ;
    this.filteredLocationList = this.housingLocationList;
  }
}
