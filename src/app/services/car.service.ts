import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ItemResponseModel } from '../models/itemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44319/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>
  {
    let newPath = this.apiUrl + "cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>
  {
    let newPath = this.apiUrl + "cars/getbybrand?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>
  {
    let newPath = this.apiUrl + "cars/getbycolor?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColorAndBrand(brandId:number,colorId:number):Observable<ListResponseModel<Car>>
  {
    let newPath = this.apiUrl + "cars/getcarbycolorandbrand?brandId=" + brandId + "&colorId=" +colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails(id:number)
  {
    let newPath = this.apiUrl + "cars/getbyid?id=" + id;
    return this.httpClient.get<ItemResponseModel<Car>>(newPath);
  }


  

  
}
