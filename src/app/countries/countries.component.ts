import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  results: [];

  constructor(private weather: WeatherService, private router: Router,
              private route: ActivatedRoute, private SpinnerService: NgxSpinnerService) {

  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.weather.displayCountries().subscribe((res: any) => this.renderResults(res));
  }

  renderResults(res: any): void {
    if (res && res.length > 0) {
      this.results = res;
      this.SpinnerService.hide();
    }
  }

}
