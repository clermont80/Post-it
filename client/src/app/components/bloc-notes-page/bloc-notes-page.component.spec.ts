import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocNotesPageComponent } from './bloc-notes-page.component';

describe('BlocNotesPageComponent', () => {
  let component: BlocNotesPageComponent;
  let fixture: ComponentFixture<BlocNotesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocNotesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlocNotesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
