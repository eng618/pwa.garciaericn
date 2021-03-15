import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare let gtag: () => void;

@Injectable()
export class GoogleAnalyticsService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  static readonly GA_TRACKING_ID: string = environment.gaTrackingId;

  constructor() {}

  public emitPageView(url: string) {
    gtag('config', environment.gaTrackingId, { pagePath: url });
  }

  public emitEvent(
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null
  ) {
    if (!eventLabel && !eventValue) {
      gtag('event', eventAction);
    } else {
      gtag('event', eventAction, {
        eventCategory,
        eventLabel,
        eventValue,
      });
    }
  }
}
