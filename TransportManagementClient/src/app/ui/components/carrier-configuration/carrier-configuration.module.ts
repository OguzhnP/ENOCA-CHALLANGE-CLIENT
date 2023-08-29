import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrierConfigurationComponent } from './carrier-configuration.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CarrierConfigurationComponent
  ],
  imports: [
    CommonModule,
     RouterModule.forChild([
      {path:"",component: CarrierConfigurationComponent}
    ]),
    MatSidenavModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule,
    FormsModule
  ],
  exports:[
    CarrierConfigurationComponent
  ]
})
export class CarrierConfigurationModule { }
