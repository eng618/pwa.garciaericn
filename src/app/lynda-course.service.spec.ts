import { TestBed, inject } from '@angular/core/testing';

import { LyndaCoursesService } from './lynda-courses.service';

describe('LyndaCoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LyndaCoursesService]
    });
  });

  it('should be created', inject([LyndaCoursesService], (service: LyndaCoursesService) => {
    expect(service).toBeTruthy();
  }));
});
