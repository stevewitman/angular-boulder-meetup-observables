import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, pipe, Subscription } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-home2',
  template: ` <h2>Ex 6 - Cold vs Hot Observbles</h2>`,
  styles: [],
})
export class X06 implements OnInit, OnDestroy {
  subscriptionA: Subscription | undefined;
  subscriptionB: Subscription | undefined;

  // COLD OBSERVABLE
  ngOnInit() {
    const myObserv = new Observable((observer: any) => {
      try {
        observer.next('YO');
        observer.next('LO');
        setInterval(() => {
          observer.next('!');
        }, 1000);
      } catch (err) {
        observer.error(err);
      }
    });

    this.subscriptionA = myObserv.subscribe(
      (x) => console.log(`%c${x}`, 'color: blue'),
      (err) => console.log(`%c${err}`, 'color: blue'),
      () => console.log('%cObservable completed', 'color: green')
    );

    setTimeout(() => {
      this.subscriptionB = myObserv.subscribe((x: any) =>
        console.log(`%cSubscriber 2 ${x}`, 'color: salmon')
      );
    }, 3000);

    setTimeout(() => {
      if (this.subscriptionA) {
        this.subscriptionA.add(this.subscriptionB);
      }
    }, 4000);

    // setTimeout(() => {
    //   if (this.subscriptionA) {
    //     this.subscriptionA.unsubscribe();
    //   }
    // }, 7000);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy lifecycle hook');
    
    if (this.subscriptionA) {
      this.subscriptionA.unsubscribe();
    }
    // if (this.subscriptionB) {
    //   this.subscriptionB.unsubscribe();
    // }
  }
}

