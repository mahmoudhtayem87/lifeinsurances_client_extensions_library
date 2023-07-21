import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VehiclesDataService {

  constructor(private http:HttpClient) {
  }

  public getVehiclesMakes()
  {
    let prom = new Promise((resolve, reject) => {
      this.http.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json').subscribe(result=>{
        // @ts-ignore
        let makes = result.Results as Array<any>;
        resolve(makes.map(item=>item.MakeName));
      },error => {
        reject(error);
      })
    })
    return prom;
  }
  public getVehiclesModelsByMake(make:any)
  {
    let prom = new Promise((resolve, reject) => {
      this.http.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/vehicletype/car?format=json`).subscribe(result=>{
        // @ts-ignore
        let makes = result.Results as Array<any>;
        resolve(makes.map(item=>item.Model_Name));
      },error => {
        reject(error);
      })
    })
    return prom;
  }
}
