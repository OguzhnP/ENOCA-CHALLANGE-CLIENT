import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from '../../../../services/http.service';
import { AlertifyService, MessageType } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent {
  id : string;
  carrierMinDesi: any;
  carrierMaxDesi: any;
  carrierCost : any;
  carrierId: any;


  carrierConfElement:any;

  form= new FormGroup({
    id:new FormControl({ value: null, disabled: true }),
    carrierMaxDesi:new FormControl(null,{validators:Validators.required}),
    carrierMinDesi:new FormControl(null,{validators:Validators.required}),
    carrierCost:new FormControl(null,{validators:Validators.required}),
    carrierId:new FormControl(null,{validators:Validators.required}),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<UpdateDialogComponent>,
    private http : HttpService,
    private alertify : AlertifyService,
  ){

    this.form.patchValue({
      id: data.element.id,
      carrierMaxDesi : data.element.carrierMaxDesi,
      carrierMinDesi : data.element.carrierMinDesi,
      carrierCost : data.element.carrierCost,
      carrierId : data.element.carrierId
    });
    this.carrierConfElement = data.element;
  }

  close(){
    this.dialogRef.close();
    window.location.reload();
   }

   onSubmit(){


    const request={
      id:this.form.get("id")?.value.toString(),
      carrierMaxDesi:this.form.get("carrierMaxDesi")?.value,
      carrierMinDesi:this.form.get("carrierMinDesi")?.value,
      carrierCost:this.form.get("carrierCost")?.value,
      carrierId:this.form.get("carrierId")?.value,
    };

   this.http.putReq("/carrierconfigurations", this.data.element.id, request).subscribe((res) => {

      this.close();
      this.alertify.message("Başarılı", MessageType.Success);
   });
   }
}
