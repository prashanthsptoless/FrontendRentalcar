import { RentalCar } from "./rentalcar";
import { ResponseModel } from "./responseModel";

export interface RentalCarResponseModel extends ResponseModel{
    data:RentalCar[]
}