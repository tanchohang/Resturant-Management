import { MaterialModule } from './../shared-module/material/material.module';
import { MenuComponent } from './menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [MenuComponent],
  exports:[MenuComponent]
})
export class MenuModule {}
