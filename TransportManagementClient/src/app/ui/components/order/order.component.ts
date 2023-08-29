import { Component, OnInit } from '@angular/core';
import { Create_Carrier } from 'src/app/models/create-carrier';
import { Create_Order } from 'src/app/models/create-order';
import { AlertifyService, MessageType } from 'src/app/services/alertify.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  order : Create_Order = new Create_Order();
  constructor(
    private httpService : HttpService,
    private alertify : AlertifyService
  ){
  }


  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.httpService.getReq("/orders").subscribe({
      next : (res) =>{console.log(res)}
    });
  }

  createOrder(){
    this.httpService.postReq("/orders" ,this.order).subscribe({
      next : (res) =>{
        this.getOrders();
        this.alertify.message("Başarılı",MessageType.Success);
      },
      error : (err) =>{
        console.log(err)
        this.alertify.message("Hata",MessageType.Error);
      }
    });
  }
}
