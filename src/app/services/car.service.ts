import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarReponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44319/api/cars/getdetail";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarReponseModel>
  {
    return this.httpClient.get<CarReponseModel>(this.apiUrl);
  }

}
