import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { QiscusService } from './qiscus.service';

describe('QiscusService', () => {
  let service: QiscusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(QiscusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
