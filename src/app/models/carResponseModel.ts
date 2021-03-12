import { Car } from "./car";
import { ResponseModel } from "./responseModel";

export interface CarReponseModel extends ResponseModel{
    data:Car[]
}