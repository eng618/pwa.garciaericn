import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eric N. Garcia';

  toggleMenu() {
    console.log('Menu toggled');
  }

  constructor() { }

}
