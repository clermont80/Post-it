import { TestBed } from '@angular/core/testing';

import { ModifyNoteModalService } from './modify-note-modal.service';

describe('ModifyNoteModalService', () => {
  let service: ModifyNoteModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyNoteModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
