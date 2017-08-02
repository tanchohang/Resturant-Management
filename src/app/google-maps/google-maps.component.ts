import { Http } from '@angular/http';
import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {
  lat: number = 27.7172453;
  lng: number =85.3239605;
  zoom:number=15;
  visible:boolean=false;
  locality:string;  
  municipality:string;
  city:string;
  country:string;
  place:string;

  searched_location:string;

 
  constructor(
       private http:Http
  ) {}

  ngOnInit() {

  }


  searchedLocation(){
    if(navigator.geolocation){
      this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+this.searched_location+"&key=AIzaSyCXrxNZUp6mPff2PZXfxqsFlHTpwJYqilo")
      .subscribe(res=>{
        if(res.json().status=="OK"){
        this.lat=res.json().results[0].geometry.location.lat;
        this.lng=res.json().results[0].geometry.location.lng;
        this.visible=true;
        console.log(res.json());
            this.locality=res.json().results[0].address_components[0].short_name;
              this.city=res.json().results[0].address_components[1].short_name;
              this.country=res.json().results[0].address_components[4].long_name;
             
              this.place=this.locality+','+
                         this.city+','+
                         this.country
        }
      })
      
    }

  }

  
  getCurrentLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((res)=>{
        this.lat=res.coords.latitude;
        this.lng=res.coords.longitude;
        this.visible=true;
        this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+this.lat+','+this.lng+'&key=AIzaSyCXrxNZUp6mPff2PZXfxqsFlHTpwJYqilo')
          .subscribe(res=>{
            if(res.json().status=="OK"){
             this.locality=res.json().results[1].address_components[0].short_name;
             this.municipality=res.json().results[2].address_components[0].short_name;
             this.city=res.json().results[3].address_components[0].short_name;
             this.country=res.json().results[1].address_components[3].long_name;
             
             this.place=this.locality+','+
                        this.municipality+','+
                        this.city+','+
                        this.country
            }
          })
      })
    }
  }
  
  mapClicked($event){}
  
}
