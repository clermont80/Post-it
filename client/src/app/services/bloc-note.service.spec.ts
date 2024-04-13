import { TestBed } from '@angular/core/testing';

import { BlocNoteService } from './bloc-note.service';

describe('BlocNoteService', () => {
  let service: BlocNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlocNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
