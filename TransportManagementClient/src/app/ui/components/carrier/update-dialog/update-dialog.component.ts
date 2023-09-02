import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Update_Carrier } from 'src/app/models/carrier/update-carrier';
import { HttpService } from 'src/app/services/http.service';
import { AlertifyService, MessageType } from '../../../../services/alertify.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent {
  id : string;
  carrierName: any;
  carrierIsActive: boolean;
  carrierPlusDesiCost: any;


  carrierElement:any;

  form= new FormGroup({
    id:new FormControl({ value: null, disabled: true }),
    carrierName:new FormControl(null,{validators:Validators.required}),
    carrierIsActive:new FormControl(null,{validators:Validators.required}),
    carrierPlusDesiCost:new FormControl(null,{validators:Validators.required}),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<UpdateDialogComponent>,
    private http : HttpService,
    private alertify : AlertifyService,
  ){

    this.form.patchValue({
      id: data.element.id,
      carrierName : data.element.carrierName,
      carrierPlusDesiCost : data.element.carrierPlusDesiCost,
      carrierIsActive : data.element.carrierIsActive,
    });
    this.carrierElement = data.element;
  }

  close(){
    this.dialogRef.close();
   }

   onSubmit(){
    const request={
      id:this.form.get("id")?.value.toString(),
      carrierName:this.form.get("carrierName")?.value,
      carrierIsActive:this.form.get("carrierIsActive")?.value,
      carrierPlusDesiCost:this.form.get("carrierPlusDesiCost")?.value,
    };

   this.http.putReq("/carriers", this.data.element.id, request).subscribe((res) => {

      this.close();
      this.alertify.message("Başarılı", MessageType.Success);
   });
   }

}
