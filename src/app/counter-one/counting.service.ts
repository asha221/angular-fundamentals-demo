import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
// BehaviorSubject used to maintain the numbers

@Injectable()
export class CountingService {

  count: number = 0;

  private counterSubject = new BehaviorSubject<number>(this.count);

  counter$ = this.counterSubject.asObservable();

  constructor() { }

  increment() {
    this.counterSubject.next(++this.count);
  }
}
