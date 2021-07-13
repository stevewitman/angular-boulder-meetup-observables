import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  template: `
    <h2>Ex 1 - More Observable Basics</h2>
    <h4>(ignoring unsubscribing)</h4>
    <hr />

    <button (click)="onClick1()">Click Me 1</button>
    <!-- <button (click)="onClick2()">Click Me 2</button> -->
    <div>Output: {{ output }}</div>

    <!-- <button (click)="onClick3()">Click Me 3</button>
    <div>Output: {{ output$ | async }}</div> -->
    <!-- <div>Output: {{ myObservable$ | async }}</div> -->
  `,
  styles: [
    `
      button {
        margin: 30px 10px 10px 0;
      }
    `,
  ],
})
export class X01 {
  myObservable$: Observable<string> | undefined;

  output = 'default value';
  output$: Observable<string> | undefined;

  ngOnInit() {
    this.myObservable$ = new Observable(function subscribe(observer: any) {
      console.log('%cmyObservable subscription STARTED', 'color: purple');

      observer.next('1st');
      observer.next('2nd');
      observer.next('3rd');

      // observer.complete();

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

    // console.log('%cmyObservable:', 'background-color: yellow', this.myObservable$);

    // this.myObservable$.subscribe(
    //   val => console.log(val)
    // )

    // this.output$ = this.myObservable$;
  }

  onClick1() {
    if (this.myObservable$) {
      // SUBSCRIBE USING POSITIONAL ARGUMENTS
      this.myObservable$.subscribe(
        (x: string) => {
          console.log(`%c(Obs 1) ${x} `, 'color: blue');
          this.output = x;
        },
        (error: any) => console.log(error),
        () => console.log('%c(Obs 1) COMPLETED', 'color: blue')
      );
    }
  }

  onClick2() {
    if (this.myObservable$) {
      // SUBSCRIBE USING POSITIONAL ARGUMENTS
      this.myObservable$.subscribe(
        (x: string) => {
          console.log(`%c(Obs 2) ${x}`, 'color: green');
          this.output = x;
        },
        (error: any) => console.log(error),
        () => console.log('%c(Obs 2) Observable COMPLETED', 'color: green')
      );
    }
  }

  onClick3() {
    this.output$ = this.myObservable$;
  }
}

