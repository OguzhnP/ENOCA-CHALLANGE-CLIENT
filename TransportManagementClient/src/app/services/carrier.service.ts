import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { List_Carrier } from '../models/list-carrier';

@Injectable({
  providedIn: 'root'
})
export class CarrierService {

  constructor(
    private http : HttpService
  ) { }


async getCarriers(successCallBack : () =>void) : Promise<List_Carrier[]>{
  const promiseData : Promise<List_Carrier[]> = this.http.getReq<List_Carrier[]>("/carriers").toPromise();

  promiseData.then(d=> successCallBack());

  return await promiseData;
}


}
