import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Create_Carrier } from 'src/app/models/create-carrier';
import { List_Carrier } from 'src/app/models/list-carrier';
import { AlertifyService, MessageType } from 'src/app/services/alertify.service';
import { HttpService } from 'src/app/services/http.service';
import { MatPaginator } from '@angular/material/paginator';
import { CarrierService } from 'src/app/services/carrier.service';
declare var $: any;
@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.scss']
})
export class CarrierComponent implements OnInit {
  carrier : Create_Carrier = new Create_Carrier();


  constructor(
    private httpService : HttpService,
    private carrierService : CarrierService,
    private alertify : AlertifyService
  ){}
  displayedColumns: string[] = ['id', 'carrierName', 'carrierIsActive', 'carrierPlusDesiCost', 'edit', 'remove'];
  dataSource : MatTableDataSource<List_Carrier> =null;


  async ngOnInit() {
   await this.getCarrriers();
  }


  async getCarrriers(){
    const allCarriers: List_Carrier[]  = await  this.carrierService.getCarriers(()=>{
      this.alertify.message("Başarılı ", MessageType.Success);
    });

    this.dataSource = new MatTableDataSource<List_Carrier>(allCarriers);
  }

  createCarrier(){
    this.httpService.postReq("/carriers" ,this.carrier).subscribe({
      next : (res) =>{
        this.getCarrriers();
      },
      error : (err) =>{
        this.alertify.message("Hata ", MessageType.Error);
        console.log(err)
      }
    });
  }


  deleteCarrier(id: any){
    this.httpService.deleteReq("/carriers",id).subscribe({
      next :()=>{
        this.getCarrriers();
      }
    });
  }
}
