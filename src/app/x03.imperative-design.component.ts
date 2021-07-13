import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { noop, Observable, Subscription } from 'rxjs';

import { Course } from './models/course';

/*
  Imperative approach - take the data from the success callback and pass data to the template.
  Does not scale well.
  We should avoid a lot of logic in the subscribe block.
  Should not nest subscribe calls (RxJS anti-pattern)
*/

@Component({
  selector: 'app-x03',
  template: `
    <div class="container">
      <h2>Ex 3 - Imperative Approach in the Subscribe</h2>
      <hr />
      <h4>Computer Science Courses</h4>
      <div *ngFor="let course of computerScienceCourses">
        <p>{{ course.code }} - {{ course.title }}</p>
      </div>
      <h4>Data Science Courses</h4>
      <div *ngFor="let course of dataScienceCourses">
        <p>{{ course.code }} - {{ course.title }}</p>
      </div>
    </div>
  `,
  styles: [],
})
export class X03 implements OnInit {
  computerScienceCourses: Course[] = [];
  dataScienceCourses: Course[] = [];
  
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    const courses$: Observable<Course[]> = this.getCourses();

    courses$.subscribe((courses: Course[]) => {
      this.computerScienceCourses = courses.filter(
        (course) => course.category === 'Computer Science (CSCI)'
      );
    });

    courses$.subscribe((courses: Course[]) => {
      this.dataScienceCourses = courses.filter(
        (course) => course.category === 'Data Science (DTSC)'
      );
    });
  }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>('http://localhost:3000/courses');
  }
}
