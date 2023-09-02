import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { List_CarrierConf } from '../models/carrier-configuration/list-carrier-configuration';

@Injectable({
  providedIn: 'root'
})
export class CarrierConfigurationService {

  constructor(
    private http : HttpService
  ) { }


async getCarrierConf(successCallBack : () =>void) : Promise<List_CarrierConf[]>{
  const promiseData : Promise<List_CarrierConf[]> = this.http.getReq<List_CarrierConf[]>("/carrierconfigurations").toPromise();

  promiseData.then(d=> successCallBack());

  return await promiseData;
}

}
