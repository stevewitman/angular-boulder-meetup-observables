import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, pipe, Subscription } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-x08',
  template: ` <h2>Ex 8 - Hot Observble</h2>`,
  styles: [],
})
export class X08 implements OnInit, OnDestroy {
  subscriptionA: Subscription | undefined;

  // HOT OBSERVABLE
  ngOnInit() {
    const hotObservable$ = fromEvent(document, 'mousemove');

    setTimeout(() => {
      this.subscriptionA = hotObservable$.subscribe((x) => console.log(x));
    }, 2000)
  }

  ngOnDestroy() {
    console.log('ngOnDestroy lifecycle hook');
    
    if (this.subscriptionA) {
      this.subscriptionA.unsubscribe();
    }
  }
}

