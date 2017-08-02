import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart,RoutesRecognized,ActivatedRoute } from '@angular/router';
import { Location,AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  loggedin:boolean=false;
  pageTitle:string;

  constructor(
    private location:Location,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private authService:AuthService,
    private auth:AngularFireAuth
  ) {
    
  }

  ngOnInit() {
    this.router.events.subscribe((data)=>{
    if(data instanceof RoutesRecognized)
      this.pageTitle = data.state.root.firstChild.data.title;
  
    this.loggedin=this.authService.getIsLoggedIn();
    
  })

  }

  back_button(){
    this.location.back();
  }

  logout(){
    this.authService.logout();
    this.router.navigate([''])
  }

}
