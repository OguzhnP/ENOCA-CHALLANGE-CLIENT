import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrierComponent } from './carrier.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    CarrierComponent,
    UpdateDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component: CarrierComponent}
    ]),
    MatSidenavModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule,MatTableModule,
   HttpClientModule,MatDialogModule,MatDividerModule,
    FormsModule,ReactiveFormsModule
  ],
  exports:[CarrierComponent,
    UpdateDialogComponent
  ]
})
export class CarrierModule { }
