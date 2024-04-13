import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocNotesDetailComponent } from './bloc-notes-detail.component';

describe('BlocNotesDetailComponent', () => {
  let component: BlocNotesDetailComponent;
  let fixture: ComponentFixture<BlocNotesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocNotesDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlocNotesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
