import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/car-detail';
import { ItemResponseModel } from '../models/itemResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44319/api/";
  constructor(private httpClient:HttpClient) { }


  getCar(carId:number):Observable<ItemResponseModel<CarDetail>>
  {
    let newPath = this.apiUrl + "cars/getdetailfor?carId=" + carId;
    return this.httpClient.get<ItemResponseModel<CarDetail>>(newPath);
  }

  


}
