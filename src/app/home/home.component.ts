import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';

import { Course } from '../shared/course';
import { LyndaCourseService } from '../lynda-course.service';
import { Card } from '../shared/card';
import { Cards } from '../shared/mock-highlight';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LyndaCourseService]
})
export class HomeComponent implements OnInit {

  title = 'Eric N. Garcia';
  slogan = 'Welcome to my professional portfolio!';
  courses: Course[];
  highlights: Card[] = Cards;

  constructor(private lyndaCourseService: LyndaCourseService) {
    console.log(this.highlights.length);
  }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.lyndaCourseService.getCourses()
      .subscribe(courses => {
        this.courses = courses
        console.log(courses);
      });
  }

}
