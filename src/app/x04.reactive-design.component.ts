import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Course } from './models/course';

/*
  Reactive approach - 
  No subscrides in this example.
  Avoids nested subscribes.
  Note - in this example, the same HTTP request is made multiple times.
*/

@Component({
  selector: 'app-x04',
  template: `
    <div class="container">
      <h2>Ex 4 - Reactive Approach in the Subscribe</h2>
      <hr />
      <h4>Computer Science Courses</h4>
      <div *ngFor="let course of computerScienceCourses$ | async">
        <p>{{ course.code }} - {{ course.title }}</p>
      </div>
      <h4>Data Science Courses</h4>
      <div *ngFor="let course of dataScienceCourses$ | async">
        <p>{{ course.code }} - {{ course.title }}</p>
      </div>
    </div>
  `,
  styles: [],
})
export class X04 implements OnInit {
  computerScienceCourses$: Observable<Course[]> | undefined;
  dataScienceCourses$: Observable<Course[]> | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    const courses$: Observable<Course[]> = this.getCourses();

    this.computerScienceCourses$ = courses$.pipe(
      map((courses) =>
        courses.filter(
          (course) => course.category === 'Computer Science (CSCI)'
        )
      )
    );

    this.dataScienceCourses$ = courses$.pipe(
      map((courses) =>
        courses.filter((course) => course.category === 'Data Science (DTSC)')
      )
    );

    // courses$.subscribe(val => console.log('Third subscription and XHR request', val))
  }

  getCourses() {
    return this.httpClient.get<Course[]>('http://localhost:3000/courses');
  }
}
