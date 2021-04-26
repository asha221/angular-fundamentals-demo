import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
  // *we can use providers[] also but here we injected directly
})
export class ColorChangeService {

  private colorSubject = new Subject<string>();

  color$ = this.colorSubject.asObservable();
  // color$ is an observable
  constructor() { }

  emitColor(color: string) {
    this.colorSubject.next(color);
  }
}
