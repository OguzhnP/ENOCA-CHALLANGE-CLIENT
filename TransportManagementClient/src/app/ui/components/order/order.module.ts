import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path : "", component: OrderComponent}
    ]),
    MatSidenavModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule,
    FormsModule
  ],
  exports:[OrderComponent
  ]
})
export class OrderModule { }
