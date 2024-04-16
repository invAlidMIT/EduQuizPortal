import { TestBed } from '@angular/core/testing';

import { SubQuestionService } from './sub-question.service';

describe('SubQuestionService', () => {
  let service: SubQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
