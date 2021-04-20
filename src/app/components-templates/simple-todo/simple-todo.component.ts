import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoTrackerService } from './todo-tracker.service';

@Component({
  selector: 'app-simple-todo',
  templateUrl: './simple-todo.component.html',
  styleUrls: ['./simple-todo.component.css'],
  providers: [TodoTrackerService]
  // we need to register services in component but here we want these service in these component and its child component thats way we register these service here
})
export class SimpleTodoComponent implements OnInit {

  userActions = [];

  constructor(public tracker: TodoTrackerService) {}

  ngOnInit() {
    this.tracker.todoObservable$.subscribe(todoAction => {
      this.userActions.push(todoAction);
    });
  }

  todos = [
    {id: 1, title: 'Pay power bill', done: false},
    {id: 2, title: 'Pay phone bill', done: false},
    {id: 3, title: 'Talk to call center', done: false},
    {id: 4, title: 'Attend meeting', done: true},
    {id: 5, title: 'Deposit money', done: true}
  ];

}
