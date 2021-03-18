import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanDeactivate } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/car-detail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  carDetail:CarDetail;
  dataLoaded=false;
  currentCar:CarDetail;
  carDetails:CarDetail[]=[];

 
  path = "https://localhost:44319/Images/";
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute,private carDetailService:CarDetailService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => 
    {
      if(params["brandId"])
      {
        this.getCarsByBrand(params["brandId"]);
      }
      else if(params["colorId"])
      {
        this.getCarsByColor(params["colorId"]);

      }
      else if(params["id"])
      {
        this.getCarDetails(params["id"]);

      }
      else
      {
        this.getCars();

      }
    })
  }

  setCarDetail(car:CarDetail)
  {
    this.currentCar = car;
  }
  getCars()
  {
    this.carService.getCars().subscribe((response) => 
    {
      this.carDetails = response.data;
      this.dataLoaded=true;

    })
  }
  getCarsByBrand(brandId:number)
  {
    this.carService.getCarsByBrand(brandId).subscribe((response) => 
    {
      this.carDetails = response.data;
      this.dataLoaded=true;

    })
  }

  getCarsByColor(colorId:number)
  {
    this.carService.getCarsByColor(colorId).subscribe((response) => 
    {
      this.carDetails = response.data;
      this.dataLoaded=true;

    })
  }

  getCarsByColorAndBrand(brandId:number,colorId:number)
  {
    this.carService.getCarsByColorAndBrand(brandId,colorId).subscribe((response) => 
    {
      this.carDetails = response.data;
      this.dataLoaded=true;

    })
  }

  getCarDetails(id:number)
  {
    this.carService.getCarDetails(id).subscribe((response) => 
    {
      this.carDetail = response.data;

    })
  }
  
  getImagePath(image:string)
  {
    let newPath:string = this.path + image;
    return newPath; 
  }




  


  

}
