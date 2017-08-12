import { AuthService } from './../../services/auth/auth.service';
import { FirebasedbService } from './../../services/db/firebasedb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
uid:string;
username:string;
  constructor(
    private fbdbService:FirebasedbService,
    private authService:AuthService
  ){
    this.authService.getId().subscribe(res=>{
      this.uid=res;
    })
  }

  ngOnInit() {
  console.log("Dashboard")
    this.fbdbService.getUserDate(this.uid).subscribe(info=>{
      this.username=info.username;
      
    })
  }



}
