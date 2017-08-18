import { AngularFireDatabase } from 'angularfire2/database';
import { TableService } from './../../table.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
tables:Observable<any>;
  constructor(
    private tableService:TableService,
    private afdb:AngularFireDatabase
  ) { }

  ngOnInit() {
    this.tables=this.afdb.list("tables");
  }

}
