import { TestBed } from '@angular/core/testing';

import { LodingInterceptor } from './loding.interceptor';

describe('LodingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LodingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LodingInterceptor = TestBed.inject(LodingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
