
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { WeatherInfoService } from './services/weather-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

  eventInfo : any;
  InfoObj : any;
  public getJsonValue:any;
  public postJsonValue:any;

  coordinateX:any;
  coordinateY:any;

  constructor(private WInfoService:WeatherInfoService,public dialog:MatDialog,private http:HttpClient){

  }

  click(event: google.maps.MapMouseEvent) {
    this.eventInfo = JSON.stringify(event);
    this.InfoObj = JSON.parse(this.eventInfo)
    this.coordinateX = (Math.round(this.InfoObj.eb.x * 100))/100
    this.coordinateY = (Math.round(this.InfoObj.eb.y * 100))/100
    console.log(this.coordinateX,this.coordinateY)
   this.getMethod()
  }


  public getMethod() {
    this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=${this.coordinateX}&longitude=${this.coordinateY}&hourly=temperature_2m`).subscribe(data => {
      console.log(data)
     let dialogRef = this.dialog.open(DialogComponent)

     this.WInfoService.info=data;
     setTimeout(() => {
      dialogRef.close()
     }, 5000);
    })
  }
}




