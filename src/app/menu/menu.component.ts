import { AuthService } from './../services/auth/auth.service';
import { FirebasedbService } from './../services/db/firebasedb.service';
import { CartService } from './../services/cart/cart.service';
import { Observable } from 'rxjs/Observable';
import { element } from 'protractor';
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
  showSpinner:boolean=true;
  
  constructor(
    private cartService:CartService ,
    private fbdbService:FirebasedbService,
    private authService:AuthService
  ) {}

  ngOnInit() {
    this.menuItems=this.fbdbService.getMenu();
    this.menuItems.subscribe(()=>this.showSpinner=false);
      
  }
 
  getHotDrinks(){
    this.fbdbService.getMenu()
    .subscribe(res=>{
     
      
    }) 
    
  }
 cartEntry(e,item){
  this.authService.authUser.subscribe(res=>{
    if(res ){
      if(e.target.checked){
        this.cartService.addToCart(res.uid,item);
      }
      else{
        this.cartService.removeFromCart(item);
      }
    }

else{
  console.log("Using offline cart");
}
  })

   
  }

  

  
}
