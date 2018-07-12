import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from '../app.component';
import { Observable } from 'rxjs';

import { Card } from '../shared/card';

@Component({
  selector: 'eng-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Eric N. Garcia';
  slogan = 'Welcome to my professional portfolio!';

  highlights: Observable<any[]>;


  constructor(db: AngularFireDatabase) {
    this.highlights = db.list('highlights').valueChanges();
  }

  ngOnInit() {
  }

}
