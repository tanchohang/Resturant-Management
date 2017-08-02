import { Router,ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth, } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import {Profile} from '../models/profile';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  profile={} as Profile;
  id:string;


  constructor(
    private auth:AngularFireAuth,
    private db:AngularFireDatabase,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.params.id;
  }

  // saveProfile(){
  //   this.auth.authState.subscribe(auth=>{    
  //     this.db.object(`/users/$uid`).set(this.profile)
  //     .then(()=>{
  //       this.router.navigate(['/dashboard'])
  //     }).catch(err=>{
  //       console.log("Error saving profile",err);
  //     })
  //   })
  // }

}
