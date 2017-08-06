import { FirebasedbService } from './../../../services/db/firebasedb.service';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-menu-entry-cms',
  templateUrl: './menu-entry-cms.component.html',
  styleUrls: ['./menu-entry-cms.component.scss']
})
export class MenuEntryCMSComponent implements OnInit {
selectedMenu:string;
selectedCategory:string;

menuList:string[]=["food-menu","drinks-menu"];
categoryList:string[]=["veg","non-veg"];
drinksList:string[]=["cold-drinks","hot-drinks","hard-drinks"];

menu:string
itemName:string;
price:string;
category:string;
subCategory:string;

  constructor(
    private firebasedbService:FirebasedbService
  ) {
    
   }

  itemNameFormContorl=new FormControl('',[
    Validators.required,
  ])

  priceFormControl=new FormControl('',[
    Validators.required
  ])

  menuSelectFormControl=new FormControl('',[
    Validators.required
  ])
  
  ngOnInit(){
  }

  save(){
    console.log(this.menu,this.itemName,this.price,this.category,this.subCategory);
    this.firebasedbService.setMenu(this.menu,this.itemName,this.price,this.category,this.subCategory);
        
  }

  cancel(){}

}
