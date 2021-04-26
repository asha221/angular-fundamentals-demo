import { Component, OnInit } from '@angular/core';

import {
  Observable,
  Subject,
  from,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject
} from 'rxjs';

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.css']
})
export class SubjectDemoComponent implements OnInit {

  numbersObservable$: Observable<number> = from([1, 2, 3, 4, 5]);
  numbersSubject: Subject<number> = new Subject();
  numbersSubjectObservable$: Observable<number> = this.numbersSubject.asObservable();

  observableLogs: string[] = [];
  subjectLogs: string[] = [];
  subjectObservableLogs: string[] = [];
  namesSubjectLogs: string[] = [];
  regularSubjectLogs: string[] = [];
  behaviorSubjectLogs: string[] = [];
  replySubjectLogs: string[] = [];
  asyncSubjectLogs: string[] = [];

  constructor() { }

  ngOnInit() {

    /******** Observable subscribers ********/
    this.numbersObservable$.subscribe(n => {
      this.observableLogs.push(`Subscriber1 received: ${n}`)
    }); // Subscriber 1

    setTimeout(() => {
      this.numbersObservable$.subscribe(n => {
        this.observableLogs.push(`Subscriber2 received: ${n}`)
      });
    }, 1500); // Subscriber 2

    /******** Subject subscribers ********/
    this.numbersSubject.subscribe(n => {
      this.subjectLogs.push(`Subscriber1 received: ${n}`)
    }); // Subscriber 1

    this.numbersSubject.next(1);

    this.numbersSubject.subscribe(n => {
      this.subjectLogs.push(`Subscriber2 received: ${n}`)
    }); // Subscriber 2

    this.numbersSubject.next(2);
    this.numbersSubject.next(3);
    this.numbersSubject.next(4);
    this.numbersSubject.next(5);

    /******** Observable created from subject subscribers ********/
    this.numbersSubjectObservable$.subscribe(n => {
      this.subjectObservableLogs.push(`Subscriber1 received: ${n}`)
    }); // Subscriber 1


    this.numbersSubjectObservable$.subscribe(n => {
      this.subjectObservableLogs.push(`Subscriber2 received: ${n}`)
    }); // Subscriber 2

    this.numbersSubject.next(6);
    this.numbersSubject.next(7);

    /******** 3. Subject as both observable and observer ********/
    let names: Array<string> = ['John', 'Andy', 'Benziman'];

    let namesSubject: Subject<string> = new Subject<string>();

    namesSubject.subscribe(n => {
      this.namesSubjectLogs.push(`Subscriber1: ${n}`)
    }); // Subscriber 1

    namesSubject.subscribe(n => {
      this.namesSubjectLogs.push(`Subscriber2: ${n}`)
    }); // Subscriber 2

    let namesObservable: Observable<string> = from(names);
    namesObservable.subscribe(namesSubject);

    /***************** Subject Types *******************/
    // Regular Subject
    let regularSubject = new Subject();

    regularSubject.subscribe({
      next: (v) => this.regularSubjectLogs.push('Subscriber1: ' + v)
    });

    regularSubject.next(1);
    regularSubject.next(2);

    regularSubject.subscribe({
      next: (v) => this.regularSubjectLogs.push('Subscriber2: ' + v)
    });

    regularSubject.next(3);
    regularSubject.next(4);

    // Behaviour Subject 
    // it display default value first and also Subscriber2 get access to last value of Subscriber1
    // output:Subscriber1: 0
    // Subscriber1: 1
    // Subscriber1: 2
    // Subscriber2: 2
    // Subscriber1: 3
    // Subscriber2: 3
    let behaviorSubject = new BehaviorSubject(0);
    // 0 is the initial value

    behaviorSubject.subscribe({
      next: (v) => this.behaviorSubjectLogs.push('Subscriber1: ' + v)
    });

    behaviorSubject.next(1);
    behaviorSubject.next(2);

    behaviorSubject.subscribe({
      next: (v) => this.behaviorSubjectLogs.push('Subscriber2: ' + v)
    });

    behaviorSubject.next(3);

    // Reply Subject
    let replaySubject = new ReplaySubject(); // buffer all values for new subscribers
    //let replaySubject = new ReplaySubject(3); // buffer last 3 values for new subscribers
    //let replaySubject = new ReplaySubject(100, 1000); // buffer last 100 values emitted in last 1 Sec(ex:sensors)

    replaySubject.subscribe({
      next: (v) => this.replySubjectLogs.push('Subscriber1: ' + v)
    });

    replaySubject.next(1);
    replaySubject.next(2);
    replaySubject.next(3);
    replaySubject.next(4);

    replaySubject.subscribe({
      next: (v) => this.replySubjectLogs.push('Subscriber2: ' + v)
    });

    replaySubject.next(5);

    // Async Subject after complition of first 4 values 5 will execute and only that will be display
    // output:Subscriber1: 5
    //        Subscriber2: 5
    let asyncSubject = new AsyncSubject();

    asyncSubject.subscribe({
      next: (v) => this.asyncSubjectLogs.push('Subscriber1: ' + v)
    });

    asyncSubject.next(1);
    asyncSubject.next(2);
    asyncSubject.next(3);
    asyncSubject.next(4);

    asyncSubject.subscribe({
      next: (v) => this.asyncSubjectLogs.push('Subscriber2: ' + v)
    });

    asyncSubject.next(6);
    asyncSubject.complete();

  }

}
