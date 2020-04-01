import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../shared/card';

/**
 * @param card: Card;
 *
 */

@Component({
  selector: 'eng-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.scss'],
})
export class DetailedCardComponent implements OnInit {
  @Input() card: Card;

  constructor() {}

  ngOnInit() {}

  navigatTo(cardUrl: String) {
    console.log(`Navigating to ${cardUrl}`);
  }
}
