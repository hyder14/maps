import { Component, OnInit } from '@angular/core';
import {MapsService} from './maps.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  lat: number;
  lng: number;
  origin: any;
  destination: any;

  location: object;

constructor(private map: MapsService) {
}

ngOnInit() {

  // if (navigator) {
  //   navigator.geolocation.getCurrentPosition(pos => {
  //     this.lat = pos.coords.latitude;
  //     this.lng = pos.coords.longitude;
  //   });
  // }

  this.map.getLocation().subscribe(
    (pos: Position) => {
    this.lat = pos.coords.latitude;
    this.lng = pos.coords.longitude;
    console.log(pos.coords.speed);
  },
    (error: any) => console.log('Position not available'));

  // this.map.getLocation().subscribe(data => {
  //   console.log(data);
  //   this.lat = data.latitude;
  //   this.lng = data.longitude;
  //   });
  }

  placeMarker(event: any) {
    this.origin = {lat: this.lat, lng: this.lng};
    console.log(event.coords.lat);
    console.log(event.coords.lng);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.getDirection();
  }

getDirection() {
  this.destination = {lat: this.lat, lng: this.lng};
  }
}
