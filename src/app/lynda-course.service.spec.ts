import { TestBed, inject } from '@angular/core/testing';

import { LyndaCourseService } from './lynda-course.service';

describe('LyndaCourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LyndaCourseService]
    });
  });

  it('should be created', inject([LyndaCourseService], (service: LyndaCourseService) => {
    expect(service).toBeTruthy();
  }));
});
