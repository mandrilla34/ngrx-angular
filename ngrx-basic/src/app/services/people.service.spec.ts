import { TestBed } from '@angular/core/testing';

import { PersonService } from './people.service';

describe('PeopleService', () => {
  let service: PersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});