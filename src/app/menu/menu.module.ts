import { SpinnerComponent } from './../ui/spinner/spinner.component';
import { UiModule } from './../ui/ui.module';
import { CartService } from './../services/cart/cart.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './../shared-module/material/material.module';
import { MenuComponent } from './menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes:Routes=[
  {path:'menu',component:MenuComponent,data:{title:"Menu"},
  children:[
  ]
},

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    UiModule
  ],
  declarations: [MenuComponent],
  exports:[MenuComponent],
  providers:[CartService]
})
export class MenuModule {}
