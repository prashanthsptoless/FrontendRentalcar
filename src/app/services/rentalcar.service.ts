import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalCarResponseModel } from '../models/rentalCarResponseModel';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalcarService {

  apiUrl = "https://localhost:44319/api/rentals/getdetail";

  constructor(private httpClient:HttpClient) { }

  getRentalCars():Observable<RentalCarResponseModel>
  {
    return this.httpClient.get<RentalCarResponseModel>(this.apiUrl);
  }
}
