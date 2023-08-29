import { Component, OnInit } from '@angular/core';
import { Create_Carrier_Conf } from 'src/app/models/create-carrier-configuration';
import { HttpService } from 'src/app/services/http.service';
import { AlertifyService, MessageType } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-carrier-configuration',
  templateUrl: './carrier-configuration.component.html',
  styleUrls: ['./carrier-configuration.component.scss']
})
export class CarrierConfigurationComponent implements OnInit {

  carrierConfiguration : Create_Carrier_Conf = new Create_Carrier_Conf();

  constructor(
     private httpService : HttpService,
    private alertify : AlertifyService){

  }
  ngOnInit(): void {
    this.getCarrrierConfigurations()
  }
  getCarrrierConfigurations(){
    this.httpService.getReq("/carrierconfigurations").subscribe({
      next : (res) =>{console.log(res)}
    });
  }

  createCarrrierConfiguration(){
    this.httpService.postReq("/carrierconfigurations" ,this.carrierConfiguration).subscribe({
      next : (res) =>{
        this.getCarrrierConfigurations();
        this.alertify.message("Başarılı",MessageType.Success);
      },
      error : (err) =>{
        console.log(err)
        this.alertify.message("Hata",MessageType.Error);
      }
    });
  }
}
