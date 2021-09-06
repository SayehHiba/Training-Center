import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {
  public getItems(): object[] {
    return [
      {
        title: 'Formation en comptabilité',
        id: 1651644545,
        completed: false,
      },
      {
        title: 'Je propose une formation en Big Data',
        id: 1651646545,
        completed: false,
      },
      {
        title: 'Intelligence artificielle..',
        id: 5451646545,
        completed: true,
      },
      {
        title: 'Pourquoi pas une formation en Business intelligence..?',
        id: 5428646545,
        completed: false,
      },
    ];
  }
}
