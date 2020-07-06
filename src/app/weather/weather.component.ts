import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  capital: string;
  code: string;
  results: any;
  toggle = false;

  constructor(private weather: WeatherService, private router: Router, 
              private route: ActivatedRoute, private SpinnerService: NgxSpinnerService) {
    route.params.subscribe(params => {
        this.capital = params.capital;
        this.code = params.code;
    });
   }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.weather.displayWeather(this.capital, this.code).subscribe((res: any) => this.renderResults(res));
  }

  renderResults(res: any): void {
    this.results = null;
    if (res) {
      this.SpinnerService.hide();
      this.results = res;
    }
  }

}
