import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import {AngularFireAuth,FirebaseAuthStateObservable} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

  authUser: firebase.User;
  isLoggedIn:boolean=false;
  

  constructor(private afAuth:AngularFireAuth,private router:Router) {
    afAuth.authState.subscribe(auth=>{
      this.authUser=auth;
      if(this.authUser!==null)
        this.isLoggedIn=true;
    })
  }

  get autheticated():boolean{
    console.log(this.authUser)
    return this.authUser!==null|| this.authUser!==undefined;
  }
  
  get currentUser():any{
    return this.autheticated?this.authUser:null;
  }

  getIsLoggedIn():boolean{
    return this.isLoggedIn
  }

  signup(email:string,password:string){
    this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      .then(value=>{
        this.isLoggedIn=true;        
        console.log("signned Up")
        this.router.navigate(['/user/'+this.authUser.uid])
      })
      .catch(err=>{
        console.error('error signing Up',err.message)
      })
  }


  login(email:string,password:string){
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
    .then(value => {
      this.isLoggedIn=true;
      this.router.navigate(['/user/'+this.authUser.uid])
        console.log('Nice, it worked!'+value);       
      })
      .catch(err => {
        console.error('Something went wrong:',err.message);
      });
  }

  logout(){
    this.afAuth.auth.signOut()
    .then(value=>{
      this.isLoggedIn=false;      
      console.log('logout successfull');
      this.router.navigate(['/'])
    })
    .catch(err=>{
           
      console.error("cannot logout:",err.message)
      
    });
}
  
  
}
