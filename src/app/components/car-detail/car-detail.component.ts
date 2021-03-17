import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/car-detail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {


  path = 'https://localhost:44319/';
  imageBasePath = environment.baseUrl;
  carDetail:CarDetail;
  constructor(private carDetailService:CarDetailService, private activatedRoute:ActivatedRoute) { }

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

  getImagePath(imagepath:string)
  {
    let newPath = this.path + imagepath;
    return newPath; 
  }

  

}
