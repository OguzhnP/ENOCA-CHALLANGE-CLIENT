import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
    {path :"",component:LayoutComponent , children:[

      {path :"carriers",loadChildren : ()=> import("./ui/components/carrier/carrier.module").then(module =>module.CarrierModule)},


      {path :"carrier-configurations",loadChildren : ()=> import("./ui/components/carrier-configuration/carrier-configuration.module").then(module =>module.CarrierConfigurationModule)},


      {path :"orders",loadChildren : ()=> import("./ui/components/order/order.module").then(module =>module.OrderModule)},]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
