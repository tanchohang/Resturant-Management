import { CartService } from './../../services/cart/cart.service';
import { AuthService } from './../../services/auth/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
tableOrders:Observable<any>;
deliveryOrders:Observable<any>;
takeawayOrder:Observable<any>;

  constructor(
    private afdb:AngularFireDatabase,
    private authService:AuthService,
  ) { }

  ngOnInit() {
    this.authService.authUser.subscribe(res=>{
      if(res){
        this.tableOrders=this.afdb.list(`/orders/${res.uid}/tableOrder`);
        this.deliveryOrders=this.afdb.list(`/orders/${res.uid}/delivery`);
        this.takeawayOrder=this.afdb.list(`/orders/${res.uid}/takeaway`);
      }
    })
  }
 

}
