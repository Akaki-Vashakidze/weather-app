import { Component, OnInit } from '@angular/core';
import { WeatherInfoService } from '../services/weather-info.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {

  temperatures:any;
  times:any;
  constructor(private WInfoService:WeatherInfoService) {

  }

  ngOnInit(): void {

    console.log(this.WInfoService.info.hourly.temperature_2m)
    this.temperatures = this.WInfoService.info.hourly.temperature_2m;
    this.times = this.WInfoService.info.hourly.time;
  }


}
