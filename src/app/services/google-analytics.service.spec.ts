import { inject } from '@angular/core/testing';

import { GoogleAnalyticsService } from './google-analytics.service';

describe('GoogleAnalyticsService', () => {
  let service: GoogleAnalyticsService;
  beforeEach(() => {
    service = new GoogleAnalyticsService();
  });

  it('should be created successfully', () => {
    expect(service).toBeTruthy();
  });
});
