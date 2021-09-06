import { Injectable } from '@angular/core';

@Injectable()
export class CountryStatisticsChartService {
  public getCountryStatistics() {
    return [
      {
        key: 'Python',
        y: 29.9,
      },
      {
        key: 'Java',
        y: 17.72,
      },
      {
        key: 'JavaScript',
        y: 8.31,
      },
      {
        key: 'C#',
        y: 6.9,
      },
      {
        key: 'Autres Langages',
        y: 37.17,
      },
    ];
  }
}
