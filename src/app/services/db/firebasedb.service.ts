import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class FirebasedbService {

  menuRef:Observable<any>
  menuChild;
  constructor(
    private db:AngularFireDatabase,
    private router:Router
   ) { 
     this.menuRef=db.list('menu/');
   }

   getMenu():Observable<any>{
     return this.menuRef
   }

    setMenu(menu:string,item:string,price:string,category:string,subCategory:string){
        
      if(menu==="food-menu"){
      this.db.database.ref('menu').push({
        item:item,
        price:price,
        subCategory:{[category]:subCategory},
          type:"food"
        })
        .then(res=>{
          console.log("added to db successfully")
        })
        .catch(res=>{
          console.log("faild to add to db")
        })
      }
      else{
        this.db.database.ref('menu').push({
          item:item,
          price:price,
          subCategory:category,
          type:"beverage"
        })
        .then(res=>{
          console.log("added to db successfully")
        })
        .catch(res=>{
          console.log("faild to add to db")
        })
      }

    }
  
    saveUserData(uid:string,username:string,email:string){
    
      this.db.database.ref('users/'+uid).set({
          username:username,
          email:email     
      })
        .then(res=>{
         this.router.navigate([`/user/${uid}/dashboard`]);   
         console.log("user Registered")     
        })
    }
}



  



