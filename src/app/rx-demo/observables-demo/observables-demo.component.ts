import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { interval } from 'rxjs';
import { from } from 'rxjs';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.css']
})
export class ObservablesDemoComponent implements OnInit {

  fromEventLogs: string[] = [];
  ajaxLogs: string[] = [];
  intervalLogs: string[] = [];
  fromLogs: string[] = [];
  ofLogs: string[] = [];
  customObservableLogs: string[] = [];
  customObservable2Logs: string[] = [];
  customObservable3Logs: string[] = [];
  arrayCustomObservableLogs: string[] = [];

  constructor() { }

  ngOnInit(): void {
    // *on page load we want to create all observables so we write all code in ngOnInit()
    
    /***** fromEvent *****/
    const specialElement = document.getElementById('special-area');
    const mouseEventsObservable = fromEvent(specialElement, 'mousemove');

    const subscription = mouseEventsObservable.subscribe(
      // subscribe method contains 3 callbacks next,error,completed. here we are writting next callback arrow function
      (evt: MouseEvent) => {
        this.fromEventLogs.push(`Coords: ${evt.clientX} X ${evt.clientY}`);  

        if (evt.clientX < 250 && evt.clientY < 230) {
          subscription.unsubscribe();
          this.fromEventLogs.push("Unsubscribed for mouse events");
        }
      }
    );

    /***** ajax *****/
    // let todosUrl = 'https://todos-api-dev.herokuapp.com/todos';
    let todosUrl ='http://localhost:3000';
    const todoObservable = ajax(todosUrl);
    // ajax server will hit the server,get the data and it wil wrap that data into an observable.that data will be emited by todoObservable
    // XHR shows all ajax server requests
    todoObservable.subscribe(
      res => {
        console.log(res.status, res.response);
        this.ajaxLogs.push('Response came');
      }
    );

     /***** interval *****/
     const secondsCounterObservable = interval(1000);
     // interval()method keep on incrementing the number for every 1sec
 
     secondsCounterObservable.subscribe(
       n => this.intervalLogs.push(`It's been ${n} seconds since subscribing!`)
     );

      /***** from array *****/
    let numbers = [10, 20, 30, 40, 50];
    const arrayObservable = from(numbers);
      // using these we can create an observable from an array

    arrayObservable.subscribe(
      n => this.fromLogs.push(`${n}`)
    );

    /***** of *****/
    const ofObservable = of(60, 70, 80, 90, 100);
    // of() method used to generate observable from an series of data
    ofObservable.subscribe(
      n => this.ofLogs.push(`${n}`)
    );

    /***** Custom observable with create method *****/
    let customObservable = Observable.create(function (observer) {
      // create() is a static method from an Observable class
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => { 
        // here the function receving data will be stop for 1sec so at that time 5 will print again 4 will print
        observer.next(4);
        observer.complete();
      }, 1000);
      observer.next(5);
    });

    customObservable.subscribe({
      next: x => this.customObservableLogs.push('got value ' + x),
      error: err => this.customObservableLogs.push('something wrong occurred: ' + err),
      complete: () => this.customObservableLogs.push('done'),
    });// subscribe method with next, error, complete methods in an object

    /***** Custom observalble with new keyword *****/
    // here constructor will be called using new keyword 
    let customObservable2 = new Observable(function (observer) {
      observer.next(11);
      observer.next(22);
      observer.next(33);
      setTimeout(() => {
        observer.next(44);
        observer.complete();
      }, 1000);
    });

    customObservable2.subscribe(
      x => this.customObservable2Logs.push('got value ' + x),
      err => this.customObservable2Logs.push('something wrong occurred: ' + err),
      () => this.customObservable2Logs.push('done')
    ); // subscribe method with next, error, complete methods

    /***** Custom observalble with error method *****/
    let customObservable3 = new Observable(function (observer) {
      try {
        observer.next(111);
        observer.next(222);
        observer.next(333);
        throw new Error('some error');
      } catch(err) {
        observer.error(err);
      }
    });

    customObservable3.subscribe(
      x => this.customObservable3Logs.push('got value ' + x), // called on, observer.next()
      err => this.customObservable3Logs.push('something wrong occurred: ' + err), // called on, observer.error()
      () => this.customObservable3Logs.push('done'), // called on, observer.complete()
    ); // subscribe method with next, error, complete methods

    /***** Custom observable on array *****/
    /***** Instead of using from method, created array observable with  Observable.create *****/
    let numbersArray = [1,2,3,4,5,6,7,8,9,10]; 
    let arrayCustomObservable = Observable.create(function (observer) {
      numbersArray.forEach(n => {
        observer.next(n);
      });
      
      observer.complete();
    });

    arrayCustomObservable.subscribe({
      next: x => this.arrayCustomObservableLogs.push('got value ' + x),
      error: err => this.arrayCustomObservableLogs.push('something wrong occurred: ' + err),
      complete: () => this.arrayCustomObservableLogs.push('done'),
    });// subscribe method with next, error, complete methods in an object    


  }

}
