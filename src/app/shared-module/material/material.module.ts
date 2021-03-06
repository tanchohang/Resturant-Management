import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
        MdToolbarModule,
        MdIconModule, 
        MdButtonModule, 
        MdListModule, 
        MdInputModule, 
        MdCheckboxModule, 
        MdCardModule, 
        MdMenuModule, 
        MdSelectModule,
        MdSidenavModule, 
        MdAutocompleteModule,
        MdButtonToggleModule
      } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdInputModule,
    MdMenuModule,
    MdSelectModule,
    MdSidenavModule,
    MdAutocompleteModule,
    MdButtonToggleModule
    
  ],
  exports:[
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdInputModule,
    MdCheckboxModule,
    MdCardModule,
    MdMenuModule,
    MdSelectModule,
    MdSidenavModule
    
    ]
})
export class MaterialModule { }
