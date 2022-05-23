import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { QiscusService } from './qiscus.service';

describe('QiscusService', () => {
  let service: QiscusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
      ],
    });
    service = TestBed.inject(QiscusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
