import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { WeatherForecast } from '../../../weather-forecast/models/weather-forecast';

@Component({
  standalone: true,
  imports: [CommonModule, MatTableModule, MatProgressSpinnerModule],
  selector: 'app-forecast-table',
  templateUrl: './forecast-table.component.html',
  styleUrls: ['./forecast-table.component.scss'],
})
export class ForecastTableComponent implements OnInit {
  @Input() loading: boolean;
  @Input() set data(data: WeatherForecast[]) {
    this.dataSource.data = data;
  }

  dataSource = new MatTableDataSource<WeatherForecast>([]);
  displayedColumns = [];

  ngOnInit() {
    this.displayedColumns = [
      'dateFormatted',
      'temperatureC',
      'temperatureF',
      'summary',
    ];
  }
}
