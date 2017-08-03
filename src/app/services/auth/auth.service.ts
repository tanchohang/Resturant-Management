import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {



authUser: Observable<firebase.User>;

  constructor(
    private router:Router,
    private afAuth:AngularFireAuth
  ) {
    this.authUser=afAuth.authState;
    }

signupWithEmail(email: string, password: string) {
  this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  .then(res=>{
    this.router.navigate(['/user/'+`${res.uid}`])
    console.log("User Registered",res);
  })
  .catch(err => {
    console.log(err.message);
  })
}

loginWithEmail(email:string,password:string){
  this.afAuth.auth.signInWithEmailAndPassword(email,password)
  .then(res=>{
    this.router.navigate(['/user/'+`${res.uid}`]) 
    console.log("User Logged In",res);
  })
  .catch(err=>{
    console.log(err.message);
  })
}

logout(){
  this.afAuth.auth.signOut()
  .then(res=>{
    this.router.navigate(['']);
    console.log("User Logged out");
  })
  .catch(err=>{
    console.log(err.message)
  })
}

  getLoggedIn():Observable<boolean>{
    return this.authUser.map(auth=>{
      if(auth==null && auth==undefined)
        return false;
      else
        return true;
    })
    
  }

  getId():Observable<string>{
     return this.afAuth.authState.map(auth=>{
        if(auth){
          return auth.uid
        }
      })
  }


}
