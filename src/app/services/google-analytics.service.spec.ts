import { inject } from '@angular/core/testing';

import { GoogleAnalyticsService } from './google-analytics.service';

describe('GoogleAnalyticsService', () => {
  it('should be created', inject(
    [GoogleAnalyticsService],
    (service: GoogleAnalyticsService) => {
      expect(service).toBeTruthy();
    }
  ));
});
