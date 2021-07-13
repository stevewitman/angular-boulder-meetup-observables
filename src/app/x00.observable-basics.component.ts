import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  template: `
    <h2>Ex 0 - Observable Basics</h2>
    <hr />
    <br />
    <div>Coin: {{ coinValue }}</div>
    <br />
    <div>Bill: {{ billValue }}</div>
  `,
})
export class X00 {
  coinValue: any;
  billValue: any;

  coins$: Observable<any> | undefined;
  bills$: Observable<any> | undefined;

  ngOnInit() {
    const coins$ = of('penny', 'nickle', 'dime', 'quarter');

    coins$.subscribe((val) => console.log('coin:', val));

    coins$.subscribe((val) => (this.coinValue = val));


    // const bills$ = from([1, 5, 10, 20]);

    // bills$.subscribe((val) => {
    //   this.billValue = '$' + val;
    //   console.log('bill:', val);
    // });
    

    // this.billValue = 2;
    // this.billValue = 4;
    // this.billValue = 6;
    // this.billValue = 8;

    // setTimeout(() => {
    //   this.billValue = 10;
    // }, 3000);
  }
}

