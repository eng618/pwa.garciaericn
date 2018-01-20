import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Eric N. Garcia';

  constructor() { }

  toggleMenu() {
    console.log('Menu toggled');
  }

  navigateTo(page: string) {
    // TODO: navigate to route after it is set up
    // url: string = `/${page}`
    console.log(`Navigating to ${page}`);
  }

}
