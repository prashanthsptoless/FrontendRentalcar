import { Component, OnInit } from '@angular/core';
import { RentalCar } from 'src/app/models/rentalcar';
import { RentalcarService } from 'src/app/services/rentalcar.service';

@Component({
  selector: 'app-rentalcar',
  templateUrl: './rentalcar.component.html',
  styleUrls: ['./rentalcar.component.css']
})
export class RentalcarComponent implements OnInit {

  
  rentalcars:RentalCar[] = [];
  dataLoaded=false;
  
  constructor(private rentalcarService:RentalcarService) { }

  ngOnInit(): void {
    this.getRentalCars();
  }
  
  getRentalCars()
  {
    this.rentalcarService.getRentalCars().subscribe((response) => 
    {
      this.rentalcars = response.data;
      this.dataLoaded = true;
    });
  }

}
