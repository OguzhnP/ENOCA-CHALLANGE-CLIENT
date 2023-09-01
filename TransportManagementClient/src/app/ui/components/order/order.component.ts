import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Create_Carrier } from 'src/app/models/create-carrier';
import { Create_Order } from 'src/app/models/create-order';
import { List_Order } from 'src/app/models/list_order';
import { AlertifyService, MessageType } from 'src/app/services/alertify.service';
import { HttpService } from 'src/app/services/http.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  order : Create_Order = new Create_Order();
  constructor(
    private httpService : HttpService,
    private orderService : OrderService,
    private alertify : AlertifyService
  ){}
  displayedColumns: string[] = ['id','carrierId', 'carrierName', 'orderCarrierCost','orderDate','orderDesi', 'edit', 'remove'];
  dataSource : MatTableDataSource<List_Order> =null;


  async ngOnInit() {
   await this.getOrders();
  }


  async getOrders(){
    const allOrders: List_Order[]  = await  this.orderService.getOrders(()=>{
      this.alertify.message("Başarılı ", MessageType.Success);
    });

    this.dataSource = new MatTableDataSource<List_Order>(allOrders);
  }

  createOrder(){
    this.httpService.postReq("/orders" ,this.order).subscribe({
      next : (res) =>{
        this.getOrders();
      },
      error : (err) =>{
        this.alertify.message("Hata ", MessageType.Error);
        console.log(err)
      }
    });
  }


  deleteCarrier(id: any){
    this.httpService.deleteReq("/orders",id).subscribe({
      next :()=>{
        this.getOrders();
      }
    });
  }
}
