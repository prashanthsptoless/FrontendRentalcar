import { Component, OnInit } from '@angular/core';
import { RentalCar } from 'src/app/models/rentalcar';
import { RentalCarResponseModel } from 'src/app/models/rentalCarResponseModel';
import { RentalcarService } from 'src/app/services/rentalcar.service';

@Component({
  selector: 'app-rentalcar',
  templateUrl: './rentalcar.component.html',
  styleUrls: ['./rentalcar.component.css']
})
export class RentalcarComponent implements OnInit {

  
  rentalcars:RentalCar[] = [];
  dataLoaded=false;
  
  rentalCarResponseModel:RentalCarResponseModel = 
  {
    data:this.rentalcars,
    message:"",
    success:true
  }
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
