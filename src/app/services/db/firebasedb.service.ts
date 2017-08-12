import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class FirebasedbService {

  menuRef:Observable<any>;

  constructor(
    private db:AngularFireDatabase,
    private router:Router,
   ) { 
     this.menuRef=db.list('menu/');
   }

    saveUserData(uid:string,username:string,email:string){
    
      this.db.object('users/'+uid).set({
          username:username,
          email:email     
      })
        .then(res=>{
         this.router.navigate([`/user/${uid}/dashboard`]);   
         console.log("user Registered")     
        })
    }

    getUserDate(uid:string):FirebaseObjectObservable<any>{
      if(uid){
        return this.db.object(`users/${uid}`)
      }
      
    }
    addToMenu(item:any){
      this.db.object(`menu/${item.$key}`).set(item);
    }
    removeFromMenu(item){
      this.db.list('menu').remove(item.$key);
    }
     getMenu():Observable<any>{
      return this.menuRef
    }

    setMenu(menu:string,item:string,price:string,category:string,subCategory:string){
        
      if(menu==="food-menu"){
      this.db.list('menu').push({
        item:item,
        price:price,
        subCategory:{[category]:subCategory},
        type:"food",
        })
        .then(res=>{
          console.log("added to db successfully")
        })
        .catch(res=>{
          console.log("faild to add to db")
        })
      }
      else{
        this.db.list('menu').push({
          item:item,
          price:price,
          subCategory:category,
          type:"beverage",
          
        })
        .then(res=>{
          console.log("added to db successfully")
        })
        .catch(res=>{
          console.log("faild to add to db")
        })
      }

    }
}



  



