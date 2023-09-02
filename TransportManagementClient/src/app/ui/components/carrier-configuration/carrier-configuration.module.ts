import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrierConfigurationComponent } from './carrier-configuration.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { UpdateDialogComponent } from './update-dialog-conf/update-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    CarrierConfigurationComponent,
    UpdateDialogComponent
  ],
  imports: [
    CommonModule,
     RouterModule.forChild([
      {path:"",component: CarrierConfigurationComponent}
    ]),
    MatSidenavModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule,MatTableModule,
    FormsModule,MatDividerModule,MatDialogModule,ReactiveFormsModule

  ],
  exports:[
    CarrierConfigurationComponent,
    UpdateDialogComponent
  ]
})
export class CarrierConfigurationModule { }
