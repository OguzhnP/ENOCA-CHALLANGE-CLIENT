import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrierComponent } from './carrier.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CarrierComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component: CarrierComponent}
    ])
  ],
  exports:[CarrierComponent
  ]
})
export class CarrierModule { }
