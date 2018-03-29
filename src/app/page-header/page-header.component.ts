import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'eng-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() imgUrl: string;
  @Input() imgAlt: string;

  constructor() { }

  ngOnInit() {
  }

}
