import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  template: `
    <h2>Ex 2 - Observers</h2>
    <h4>(still ignoring unsubscribing)</h4>
    <hr />

    <button (click)="onClick1()">Click Me 1</button>
    <button (click)="onClick2()">Click Me 2</button>
    <div>Output: {{ output }}</div>
  `,
  styles: [
    `
      button {
        margin: 30px 10px 10px 0;
      }
    `,
  ],
})
export class X02 {
  myObservable$: Observable<string> | undefined;

  output = 'default';
  output$: Observable<string> | undefined;

  myObserver = {
    next: (x: any) => console.log(`myObserver - NEXT: ${x}`),
    error: (err: Error) => console.error('Error: ' + err),
    complete: () => console.log('myObserver - COMPLETED:'),
  };

  ngOnInit() {
    this.myObservable$ = new Observable(function whatever(observer: any) {
      console.log('%cmyObservable subscription STARTED', 'color: purple');

      observer.next('1st');
      observer.next('2nd');
      observer.next('3rd');

      setTimeout(() => {
        observer.next(`4th`);
      }, 1000);

      setTimeout(() => {
        observer.next(`5th`);
      }, 2000);

      setTimeout(() => {
        observer.next('6th');
      }, 3000);

      setTimeout(() => {
        observer.complete();
      }, 5000);
    });
  }

  onClick1() {
    if (this.myObservable$) {
      // SUBSCRIBE USING POSITIONAL ARGUMENTS
      this.myObservable$.subscribe(
        (x: string) => {
          console.log(`%cPositional args - NEXT: ${x} `, 'color: blue');
          this.output = x;
        },
        (error: any) => console.log(error),
        () => console.log('%cPositional args - COMPLETE:', 'color: blue')
      );
    }
  }

  onClick2() {
    if (this.myObservable$) {
      // SUBSCRIBE USING OBSERVER
      this.myObservable$.subscribe(this.myObserver);
    }
  }
}

