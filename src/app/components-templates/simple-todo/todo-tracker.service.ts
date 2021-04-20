import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoTrackerService {

  constructor(private http: HttpClient) { }

  private todoSubject = new Subject();

  public todoObservable$ = this.todoSubject.asObservable();
  // we don't have any methods on Observable to emit the data so we create subject on an observable and calling the data from there

  track(todo: { title: any; done: any; }) {
    let action = `${todo.title} is ${todo.done ? `` : `not`} completed`;
    this.todoSubject.next(action);
    
    /* Getting data from local json file */
    /* this.http.get('assets/todos.json').subscribe(data => {
      console.log(data);
    }); */
  }

}
