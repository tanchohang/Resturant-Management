import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule} from '@agm/core';
import { GoogleMapsComponent } from "./google-maps.component";
import { FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'dashboard/google-maps',component:GoogleMapsComponent,data:{title:"google-maps"}}
      
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCXrxNZUp6mPff2PZXfxqsFlHTpwJYqilo'
    })
  ],
  declarations: [GoogleMapsComponent,
],
  exports:[GoogleMapsComponent,
]
})
export class GoogleMapsModule { }
