import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';

import { Course } from './models/course';

/*
  Multi-cast shares same request between multiple subscriptions
*/

@Component({
  selector: 'app-x05',
  template: `
    <div class="container">
      <h2>Ex 5 - Multi-cast</h2>
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
export class X05 implements OnInit {
  computerScienceCourses$: Observable<Course[]> | undefined;
  dataScienceCourses$: Observable<Course[]> | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    // const courses$: Observable<Course[]> = this.getCourses();

    const courses$: Observable<Course[]> = this.getCourses().pipe(
      tap(() => console.log('%cHTTP request executed', 'color: salmon')),
      shareReplay() 
    );

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

    // courses$.subscribe();
  }

  getCourses() {
    return this.httpClient.get<Course[]>('http://localhost:3000/courses');
  }
}
