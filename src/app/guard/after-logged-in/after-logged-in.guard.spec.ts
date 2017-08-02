import { TestBed, async, inject } from '@angular/core/testing';

import { AfterLoggedInGuard } from './after-logged-in.guard';

describe('AfterLoggedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfterLoggedInGuard]
    });
  });

  it('should ...', inject([AfterLoggedInGuard], (guard: AfterLoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
