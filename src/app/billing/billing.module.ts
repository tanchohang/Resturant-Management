import { UiModule } from './../ui/ui.module';
import { MaterialModule } from './../shared-module/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    UiModule,
    RouterModule.forChild([
      {path:'cart',component:CartComponent,data:{title:"Cart"}},
      {path:'billing',component:BillComponent,data:{title:"Billing Section"}}
      
    ])
  ],
  declarations: [BillComponent, CartComponent],
  exports:[BillComponent, CartComponent]
})
export class BillingModule { }
