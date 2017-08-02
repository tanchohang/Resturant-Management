import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'cart',component:CartComponent,data:{title:"Cart"}}
    ])
  ],
  declarations: [BillComponent, CartComponent],
  exports:[BillComponent, CartComponent]
})
export class BillingModule { }
