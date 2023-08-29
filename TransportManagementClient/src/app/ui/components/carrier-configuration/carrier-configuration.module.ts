import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrierConfigurationComponent } from './carrier-configuration.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CarrierConfigurationComponent
  ],
  imports: [
    CommonModule,
     RouterModule.forChild([
      {path:"",component: CarrierConfigurationComponent}
    ])
  ],
  exports:[
    CarrierConfigurationComponent
  ]
})
export class CarrierConfigurationModule { }
