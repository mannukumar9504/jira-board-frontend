import { TestBed } from '@angular/core/testing';

import { IssuesService } from './issues';

describe('Issues', () => {
  let service: IssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
