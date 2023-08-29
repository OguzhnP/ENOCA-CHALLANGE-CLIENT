import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModule } from './order/order.module';
import { CarrierConfigurationModule } from './carrier-configuration/carrier-configuration.module';
import { CarrierModule } from './carrier/carrier.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrderModule,
    CarrierConfigurationModule,
    CarrierModule,
  ]
})
export class ComponentsModule { }
