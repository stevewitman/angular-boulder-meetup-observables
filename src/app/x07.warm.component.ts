import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, pipe, Subscription } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-x07',
  template: ` <h2>Ex 7 - Warm Observble</h2>`,
  styles: [],
})
export class X07 implements OnInit, OnDestroy {
  subscriptionA: Subscription | undefined;
  subscriptionB: Subscription | undefined;

  // WARM OBSERVABLE
  // Here the Observable is multicast using the share operator
  // SubscriptionA is started Cold then when SubscriptionB subscribes 3 seconds later
  // it recieves only the current notifications being "shared" by the Observable
  ngOnInit() {
    
    const myObserv = new Observable((observer: any) => {
      observer.next('YO');
      observer.next('LO');
      setInterval(() => {
        observer.next('!');
      }, 1000);
    }).pipe(share());

    this.subscriptionA = myObserv.subscribe(
      (x: any) => console.log(`%c${x}`, 'color: blue'),
      (err: any) => console.log(`%c${err}`, 'color: blue'),
      () => console.log('%cObservable completed', 'color: green')
    );
    setTimeout(() => {
      this.subscriptionB = myObserv.subscribe((x: any) =>
      console.log(`%cSubscriber 2 ${x}`, 'color: salmon')
      );
    }, 3000);

    // Unsubscribe after 7 seconds
    setTimeout(() => {
      if (this.subscriptionA) {
        this.subscriptionA.unsubscribe();
      }
    }, 7000);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy lifecycle hook');
    
    if (this.subscriptionA) {
      this.subscriptionA.unsubscribe();
    }
    if (this.subscriptionB) {
      this.subscriptionB.unsubscribe();
    }
  }
}

