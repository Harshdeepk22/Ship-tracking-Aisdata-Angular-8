import { Component, OnInit } from '@angular/core';
import {AisdataService} from './services/aisdata.service';
// import { Socket } from 'ngx-socket-io';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shiptracking';
  gps_lats: Array<number>;
  gps_longs: Array<number>;
  gps_mmsi: Array<number>;
  gps_status: Array<number>;
  gps_status_text: Array<string>;
  gps_speed: Array<number>;
  gps_radio: Array<number>;
  gps_second: Array<number>;
  gps_shipname:Array<string>;
  gps_shiptype:Array<string>;
  gps_destination :Array<string>;
  gps_shiptype_text:Array<string>;
  Ship_Data:[]

  constructor(private service : AisdataService){
    this.getdata();
  }





  getdata(){
    this.service.Ais_Data().subscribe(res =>{
      console.log(res,"data====>")
      //console.log(Object.values(res['data']).map(({ lat }) => lat));
     for(let key in res){
       
       this.gps_shipname = Object.values(res[key].data).map(({ shipname }) => shipname)
       this.gps_shiptype = Object.values(res[key].data).map(({ shiptype }) => shiptype)
       this.gps_shiptype_text = Object.values(res[key].data).map(({ shiptype_text }) => shiptype_text)
       this.gps_destination = Object.values(res[key].data).map(({ destination }) => destination)
       this.gps_lats = Object.values(res[key].data).map(({ lat }) => lat)
       this.gps_longs = Object.values(res[key].data).map(({ lon }) => lon)
       this.gps_mmsi = Object.values(res[key].data).map(({ mmsi }) => mmsi)
       this.gps_second = Object.values(res[key].data).map(({ second }) => second)
       this.gps_status = Object.values(res[key].data).map(({ status }) => status)
       this.gps_status_text = Object.values(res[key].data).map(({ status_text }) => status_text)
       this.gps_speed = Object.values(res[key].data).map(({ speed }) => speed)
       this.gps_radio = Object.values(res[key].data).map(({ radio }) => radio)
       this.gps_shipname = Object.values(res[key].data).map(({ shipname }) => shipname)
     
       }
   
  })
 }

 onMouseOver(infoWindow, $event: MouseEvent) {
  infoWindow.open();
}

onMouseOut(infoWindow, $event: MouseEvent) {
  infoWindow.close();
}

// mapReady(){
//   this.getdata()
// }
Refresh_Data(){
  this.getdata()
}

}
