import { Component, OnInit } from '@angular/core';
import { Create_Carrier } from 'src/app/models/create-carrier';
import { AlertifyService, MessageType } from 'src/app/services/alertify.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.scss']
})
export class CarrierComponent implements OnInit {

  carrier : Create_Carrier = new Create_Carrier();
  trueValue : boolean = true;
  falseValue : boolean = false;
  constructor(
    private httpService : HttpService,
    private alertify : AlertifyService
  ){}

  ngOnInit(): void {
    this.getCarrriers();
  }

  getCarrriers(){
    this.httpService.getReq("/carriers").subscribe({
      next : (res) =>{console.log(res)}
    });
  }

  createCarrier(){
    this.httpService.postReq("/carriers" ,this.carrier).subscribe({
      next : (res) =>{
        this.getCarrriers();
        this.alertify.message("Başarılı",MessageType.Success);
      },
      error : (err) =>{
        console.log(err)
        this.alertify.message("Hata",MessageType.Error);
      }
    });
  }
}
