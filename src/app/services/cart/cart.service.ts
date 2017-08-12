import { FirebasedbService } from './../db/firebasedb.service';
import { AuthService} from './../auth/auth.service';
import { menuItem} from './../../models/menuItem';
import { element} from 'protractor';
import { CartItem} from './../../models/cartItem';
import { Router} from '@angular/router';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';
import { Injectable} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscriber
} from 'rxjs';
import { of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class CartService {
  uid:string;
  

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private authService: AuthService,
    private fbdbService:FirebasedbService

  ) {
      this.authService.authUser.subscribe(user=>{
      if(user){
        this.uid=user.uid;
        console.log(this.uid)
      }
     })
  }


  setDeliveryOrder(item){
    this.db.object(`orders/${this.uid}/delivery/${item.$key}`).set(item);
  }
  setTableOrder(item,tblNo){
    this.db.object(`orders/${this.uid}/table/${tblNo}/${item.$key}`).set(item);
  }
   setTakeawayOrder(item){
    this.db.object(`orders/${this.uid}/takeaway/${item.$key}`).set(item);
  }

  getCart():Observable < any > {

    return this.db.list(`cart/${this.uid}`)
  }

  addToCart(uid,item) {
    this.db.object(`cart/${uid}/${item.$key}`).set(item);    
    console.log("Added to cart");
  }

  removeFromCart(item) {
    this.db.object(`cart/${this.uid}/${item.$key}`).remove();

  }

}
