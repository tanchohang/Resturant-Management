import { Router } from '@angular/router';
import { CartService } from './../../services/cart/cart.service';
import { AuthService } from './../../services/auth/auth.service';
import { GoogleMapsComponent } from './../../google-maps/google-maps.component';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private cartService:CartService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

  delivery(){
    this.authService.authUser.subscribe(user=>{
      if(user){
    this.cartService.getCart().subscribe(res=>{
      res.map(item=>{
        console.log(item);
      this.cartService.setDeliveryOrder(item);
      this.router.navigate([`/user/${user.uid}/order`])
      this.cartService.removeFromCart(item);      
      })
    })
  }
})

  }
}
