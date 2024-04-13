import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyNoteModalComponent } from './modify-note-modal.component';

describe('ModifyNoteModalComponent', () => {
  let component: ModifyNoteModalComponent;
  let fixture: ComponentFixture<ModifyNoteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyNoteModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyNoteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
