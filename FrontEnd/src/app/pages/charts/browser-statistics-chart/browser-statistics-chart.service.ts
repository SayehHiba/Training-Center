import { Injectable } from '@angular/core';

@Injectable()
export class BrowserStatisticsChartService {
  public getBrowserStatistics() {
    return [
      {
        key: 'Tunisie',
        y: 60,
      },
      {
        key: 'Algerie',
        y: 20,
      },
      {
        key: 'Maroc',
        y: 15,
      },
      {
        key: 'France',
        y: 10,
      },
      {
        key: 'Autres',
        y: 5,
      },
    ];
  }
}
