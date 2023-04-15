import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryNotesComponent } from './gallery-notes.component';

describe('GalleryNotesComponent', () => {
  let component: GalleryNotesComponent;
  let fixture: ComponentFixture<GalleryNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
