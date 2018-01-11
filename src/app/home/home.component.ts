import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Eric N. Garcia';
  slogan = "Welcome to my professional portfolio!"

  constructor() { }

  ngOnInit() {
  }

}
