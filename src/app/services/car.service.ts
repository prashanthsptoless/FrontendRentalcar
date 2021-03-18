import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ItemResponseModel } from '../models/itemResponseModel';
import { CarDetail } from '../models/car-detail';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44319/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetail>>
  {
    let newPath = this.apiUrl + "cars/getdetail";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>
  {
    let newPath = this.apiUrl + "cars/getbybrand?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>
  {
    let newPath = this.apiUrl + "cars/getbycolor?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByColorAndBrand(brandId:number,colorId:number):Observable<ListResponseModel<CarDetail>>
  {
    let newPath = this.apiUrl + "cars/getcarbycolorandbrand?brandId=" + brandId + "&colorId=" +colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetails(carId:number)
  {
    let newPath = this.apiUrl + "cars/getbyid?id=" + carId;
    return this.httpClient.get<ItemResponseModel<CarDetail>>(newPath);
  }

  getCarImages()
  {
    let newPath = this.apiUrl + "carImages/getall";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);

  }

  

  
}
