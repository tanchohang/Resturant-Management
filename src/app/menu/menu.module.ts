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
    MaterialModule
  ],
  declarations: [MenuComponent],
  exports:[MenuComponent]
})
export class MenuModule {}
