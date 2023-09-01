import { Injectable } from '@angular/core';
import { List_Order } from '../models/list_order';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(
    private http : HttpService
  ) { }


async getOrders(successCallBack : () =>void) : Promise<List_Order[]>{
  const promiseData : Promise<List_Order[]> = this.http.getReq<List_Order[]>("/orders").toPromise();

  promiseData.then(d=> successCallBack());

  return await promiseData;
}

}
