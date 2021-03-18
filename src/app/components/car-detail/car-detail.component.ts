import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/car-detail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  path = "https://localhost:44319/Images/";
  carDetail:CarDetail;
  constructor(private carDetailService:CarDetailService, private activatedRoute:ActivatedRoute, private carService:CarService) { }

  ngOnInit(): void {
  
    this.activatedRoute.params.subscribe(params =>
    {
      if(params["carId"])
      {
        this.getCar(params["carId"]);
      
      }
    })
  }

  getCar(id:number)
  {
    this.carDetailService.getCar(id).subscribe((response) => 
    {
      this.carDetail = response.data;


    })
  }
  getImagePath(image:string)
  {
    let newPath:string = this.path + image;
    return newPath; 
  }
  getBack()
  {
    this.carService.getCars();
  }







  

}
