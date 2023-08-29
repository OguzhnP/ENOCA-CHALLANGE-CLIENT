import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrierComponent } from './carrier.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CarrierComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component: CarrierComponent}
    ]),
    MatSidenavModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule,
    FormsModule
  ],
  exports:[CarrierComponent
  ]
})
export class CarrierModule { }
