import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';

import { Course } from '../shared/course';
import { LyndaCourseService } from '../lynda-course.service';
import { Highlight } from '../shared/highlight';
import { Highlights } from '../shared/mock-highlight';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Eric N. Garcia';
  slogan = 'Welcome to my professional portfolio!';
  courses: Course[];
  highlights: Highlight[] = Highlights;

  constructor(private lyndaCourseService: LyndaCourseService) { }

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

  viewHighlight(highlight: Highlight) {
    // TODO: rout to the url
    console.log(`Need to launch ${highlight.url}`);
  }

}
