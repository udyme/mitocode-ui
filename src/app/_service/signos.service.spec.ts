import { TestBed, inject } from '@angular/core/testing';

import { SignosService } from './signos.service';

describe('SignosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignosService]
    });
  });

  it('should be created', inject([SignosService], (service: SignosService) => {
    expect(service).toBeTruthy();
  }));
});
