import { Observable } from 'rxjs/Observable';
import { element } from 'protractor';
import { FirebasedbService } from './../services/db/firebasedb.service';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit, HostListener} from '@angular/core';
Router
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems:Observable<any>;
  
  constructor(
    private firebasedbService:FirebasedbService   
  ) {}

  ngOnInit() {
    this.menuItems=this.firebasedbService.getMenu();
    
  }
 addClass(event:any,className:string){
    let cartBtn=event.target
    if(cartBtn.classList.contains('added')){
      cartBtn.classList.remove('added');
    }
    else{
      cartBtn.classList.add('added');
    }

 }
  cart(event){
    this.addClass(event,'added');
    
    
  }
  getHotDrinks(){
    this.firebasedbService.getMenu()
    .subscribe(res=>{
     
      
    }) 
    
  }

  

  
}
