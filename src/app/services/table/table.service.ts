import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class TableService {

  constructor(
   private afdb:AngularFireDatabase
  ) { }

  getTables():Observable<any>{
  return this.afdb.list("tables")
  }

  getTableStatus(tblNo:number){
   this.afdb.list(`tables/${tblNo}`).subscribe(res=>{
       console.log(res);
    })
  }

}
