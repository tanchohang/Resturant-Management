import { FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from './../../services/auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { CartService } from './../../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
tblNo:number;
showSpinner:boolean=true;
totalCost:number=0;
cartItems:Observable<any>;


  constructor(
    private cartService:CartService,
    private authService: AuthService

  ) {}

  ngOnInit() {
    this.authService.authUser.subscribe(res=>{
      if(res){
        this.cartItems=this.cartService.getCart();

        this.cartService.getCart().subscribe(res=>{
        this.showSpinner=false;
      // this.totalCost=this.cartService.getTotalCost();
        res.map(item=>{
          console.log(item.price);
          this.totalCost+=parseInt(item.price);
        })
        
        })
      }
      })
    }

    removeFromCart(item:any){
      console.log("clicked")
      this.cartService.removeFromCart(item);
    }


    order(){
      this.cartService.getCart().subscribe(res=>{
        res.map(item=>{
          console.log(item);
        this.cartService.setTableOrder(item,7);
        this.removeFromCart(item);
        })
      })

    }
    delivery(){
      this.cartService.getCart().subscribe(res=>{
        res.map(item=>{
          console.log(item);
        this.cartService.setDeliveryOrder(item);
        this.removeFromCart(item);
        })
      })

    }
    takeaway(){
      this.cartService.getCart().subscribe(res=>{
        res.map(item=>{
          console.log(item);
        this.cartService.setTakeawayOrder(item);
        this.removeFromCart(item);
        })
      })

    }

}
