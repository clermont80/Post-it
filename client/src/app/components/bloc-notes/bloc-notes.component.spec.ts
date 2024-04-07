import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocNotesComponent } from './bloc-notes.component';

describe('BlocNotesComponent', () => {
  let component: BlocNotesComponent;
  let fixture: ComponentFixture<BlocNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlocNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
