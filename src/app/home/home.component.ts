import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { Observable } from 'rxjs';

@Component({
  selector: 'eng-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Eric N. Garcia';
  slogan = 'Welcome to my professional portfolio!';

  highlights: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.highlights = db.list('highlights').valueChanges();
  }

  ngOnInit() {}
}
