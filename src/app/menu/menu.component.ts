import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu:FirebaseListObservable<any[]>;
  constructor(
    private db:AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.menu=this.db.list('/menu/bevreag');
    this.menu.subscribe(data=>{
      console.log(data)
    })
    
  
  }

}
