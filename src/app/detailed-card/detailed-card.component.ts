import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../shared/course';

/**
* @param course: Course;
*
*/

@Component({
  selector: 'eng-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.css']
})
export class DetailedCardComponent implements OnInit {

  @Input() course: Course;

  constructor() { }

  ngOnInit() {
  }

}
