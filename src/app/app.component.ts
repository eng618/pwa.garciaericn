import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from './services/google-analytics.service';

@Component({
  selector: 'eng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Eric N. Garcia';

  constructor(public router: Router, private googleAnalyticsService: GoogleAnalyticsService) { }


  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.googleAnalyticsService.emitPageView(event.urlAfterRedirects);
      }
    });
  }
}
