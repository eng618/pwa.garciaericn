import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class GoogleAnalyticsService {

  static readonly GA_TRACKING_ID: string = environment.gaTrackingId;

  constructor() { }

  public emitPageView(
    url: string
  ) {
    console.log(`Page '${url}' emited`);
    gtag('config', environment.gaTrackingId, {'page_path': url});
  }

  public emitEvent(
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null) {


    if (!eventLabel && !eventValue) {
      gtag('event', eventAction);
    } else {
      gtag('event', eventAction, {
        eventCategory,
        eventLabel,
        eventValue
      })
    }
  }

}
