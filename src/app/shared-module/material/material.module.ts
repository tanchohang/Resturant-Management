import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdIconModule, MdButtonModule, MdListModule, MdInputModule, MdCheckboxModule, MdCardModule, MdMenuModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdInputModule,
    MdMenuModule
    
  ],
  exports:[
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdInputModule,
    MdCheckboxModule,
    MdCardModule,
    MdMenuModule
    ]
})
export class MaterialModule { }
