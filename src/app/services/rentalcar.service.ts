import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { RentalCar } from '../models/rentalcar';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalcarService {

  apiUrl = "https://localhost:44319/api/rentals/getdetail";

  constructor(private httpClient:HttpClient) { }

  getRentalCars():Observable<ListResponseModel<RentalCar>>
  {
    return this.httpClient.get<ListResponseModel<RentalCar>>(this.apiUrl);
  }
}
