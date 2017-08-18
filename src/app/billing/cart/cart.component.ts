import { Router } from '@angular/router';
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
tblNo:number=0;
showSpinner:boolean=true;
totalCost:number=0;
cartItems:Observable<any>;


  constructor(
    private cartService:CartService,
    private authService: AuthService,
    private router:Router
  ) {console.log(this.tblNo)}

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
      this.authService.authUser.subscribe(user=>{
        if(user){
          console.log(this.authService.authUser)
            this.cartService.getCart().subscribe(res=>{
              if(res){
              res.map(item=>{
                console.log(item);
              this.cartService.setTableOrder(item,7);
              this.router.navigate([`/user/${user.uid}/order`])
              this.removeFromCart(item);
              })
            }
          })
        }
        else{
        console.error("Login first");
        this.router.navigate(['/login']);
        }
      })
     
     
  
    }
    delivery(){
      this.authService.authUser.subscribe(user=>{
        if(user){
          this.router.navigate([`/user/${user.uid}/delivery`]);
        }
      })

    }
    takeaway(){
      this.authService.authUser.subscribe(user=>{
        if(user){
      this.cartService.getCart().subscribe(res=>{
        res.map(item=>{
          console.log(item);
        this.cartService.setTakeawayOrder(item);
        this.router.navigate([`/user/${user.uid}/order`])
        this.removeFromCart(item);
        })
      })
    }
  })

    }

}
