import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Course } from './shared/course';
import { Courses } from './shared/mock-courses';

@Injectable()
export class LyndaCourseService {

  constructor() { }

  getCourses(): Observable<Course[]> {
    return of(Courses);
  }

}
