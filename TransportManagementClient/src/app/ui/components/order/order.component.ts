import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{

  constructor(
    private alertify : AlertifyService
  ){}
  ngOnInit(): void {
    this.alertify.message("deneme",MessageType.Warning);
  }

}
