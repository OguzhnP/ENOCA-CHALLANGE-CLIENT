import { Component, OnInit } from '@angular/core';
import { Create_Carrier_Conf } from 'src/app/models/carrier-configuration/create-carrier-configuration';
import { HttpService } from 'src/app/services/http.service';
import { AlertifyService, MessageType } from 'src/app/services/alertify.service';
import { MatTableDataSource } from '@angular/material/table';
import { List_CarrierConf } from 'src/app/models/carrier-configuration/list-carrier-configuration';
import { CarrierConfigurationService } from '../../../services/carrier-configuration.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from './update-dialog-conf/update-dialog.component';

@Component({
  selector: 'app-carrier-configuration',
  templateUrl: './carrier-configuration.component.html',
  styleUrls: ['./carrier-configuration.component.scss']
})
export class CarrierConfigurationComponent implements OnInit {

  carrierConfiguration : Create_Carrier_Conf = new Create_Carrier_Conf();

  constructor(
     private httpService : HttpService,
     private carrierConfService : CarrierConfigurationService,
    private alertify : AlertifyService,
    private dialog: MatDialog
    ){

  }


  displayedColumns: string[] = ['id','carrierId', 'carrierName', 'carrierCost','carrierMinDesi','carrierMaxDesi', 'edit', 'remove'];
  dataSource : MatTableDataSource<List_CarrierConf> =null;


  ngOnInit(): void {
    this.getCarrierConf()
  }

  async getCarrierConf(){
    const allCarrierConf: List_CarrierConf[]  = await  this.carrierConfService.getCarrierConf(()=>{
      this.alertify.message("Başarılı ", MessageType.Success);
    });

    this.dataSource = new MatTableDataSource<List_CarrierConf>(allCarrierConf);
  }


  createCarrrierConfiguration(){
    this.httpService.postReq("/carrierconfigurations" ,this.carrierConfiguration).subscribe({
      next : (res) =>{
        this.getCarrierConf();
        this.alertify.message("Başarılı",MessageType.Success);
      },
      error : (err) =>{
        console.log(err)
        this.alertify.message("Hata",MessageType.Error);
      }
    });
  }

  deleteCarrierConf(id: any){
    this.httpService.deleteReq("/carrierconfigurations",id).subscribe({
      next :()=>{
        this.getCarrierConf();
      }
    });
  }

  openDialog(element:any){
    this.dialog.open(UpdateDialogComponent,{
       data:{
         element:element,
       }
     });
   }
 }

