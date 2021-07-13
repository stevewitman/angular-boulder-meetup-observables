import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

@Component({
  selector: 'app-x09',
  template: `
    <h2>Ex 9 - Subjects</h2>
    <hr />
    <div><b>Subject Message:</b> {{ subjectMessage$ | async }}</div>
    <br />
    <div>
      <b>Behavior Subject Message:</b> {{ behaviorSubjectMessage$ | async }}
    </div>
    <br />
    <div>
      <button (click)="onChangeMessage()">Change Message</button>
    </div>
  `,
  styles: [],
})
export class X09 implements OnInit {
  subjectMessage$: Observable<string> | undefined;
  behaviorSubjectMessage$: Observable<string> | undefined;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.subjectMessage$ = this.messageService.getSubjectMessage();
    this.behaviorSubjectMessage$ =
      this.messageService.getBehaviorSubjectMessage();
  }

  onChangeMessage() {
    this.messageService.sendMessage('First new message');
  }
}
