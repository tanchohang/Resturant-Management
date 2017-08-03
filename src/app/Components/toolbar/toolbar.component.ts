import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart,RoutesRecognized,ActivatedRoute } from '@angular/router';
import { Location,AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isLoggedin:boolean;
  pageTitle:string;
  id:string;

  constructor(
    private location:Location,
    private router:Router,
    private authService:AuthService,
    ) {
      this.authService.getId().subscribe(res=>{
        this.id=res;
      })
    }

  ngOnInit() {
    this.router.events.subscribe((data)=>{
    if(data instanceof RoutesRecognized)
      this.pageTitle = data.state.root.firstChild.data.title;
    })

    this.authService.getLoggedIn().subscribe(isLoggedIn=>{
      this.isLoggedin=isLoggedIn;
    });

  }

  back_button(){
    this.location.back();
  }

  logout(){
    this.authService.logout();
  }

  navigateDashboard(){
    this.router.navigate(["/user/"+this.id+"/dashboard"])
  }
}
