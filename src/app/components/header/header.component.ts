import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'eng-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isMobile: boolean;
  @Input() snav;

  title = 'Eric N. Garcia';

  constructor() {}

  ngOnInit() {}
}
