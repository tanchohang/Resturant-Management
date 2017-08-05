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

  constructor(    
  ) {
    
   }

  ngOnInit() {
  
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
  
}
