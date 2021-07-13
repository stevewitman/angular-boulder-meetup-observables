import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private subject$: Subject<string>;
  private behaviorSubject$: BehaviorSubject<string>;

  constructor() {
    this.subject$ = new Subject<string>();
    this.behaviorSubject$ = new BehaviorSubject<string>('default message');
  }

  sendMessage(message: string) {
    this.subject$.next(message);
    this.behaviorSubject$.next(message);
  }


  getSubjectMessage(): Observable<string> {
    return this.subject$;
  }

  getBehaviorSubjectMessage(): Observable<string> {
    return this.behaviorSubject$;
  }
}
