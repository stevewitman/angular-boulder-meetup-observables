import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

@Component({
  selector: 'app-home',
  template: `<h2>Home</h2>
    <hr />
    <br /><br /><br /><br /><br />
    <div><b>Subject Message:</b> {{ subjectMessage$ | async }}</div>
    <br />
    <div>
      <b>Behavior Subject Message:</b> {{ behaviorSubjectMessage$ | async }}
    </div> `,
  styles: [],
})
export class HomeComponent {
  subjectMessage$: Observable<string> | undefined;
  behaviorSubjectMessage$: Observable<string> | undefined;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.subjectMessage$ = this.messageService.getSubjectMessage();
    this.behaviorSubjectMessage$ = this.messageService.getBehaviorSubjectMessage();
  }
}
