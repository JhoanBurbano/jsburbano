import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery-notes',
  templateUrl: './gallery-notes.component.html',
  styleUrls: ['./gallery-notes.component.scss'],
})
export class GalleryNotesComponent {
  @Input() experiences: Array<{
    job: string;
    company: string;
    years: string;
    description: string;
  }>;
  @ViewChild('notes') notes: ElementRef;

  nextControl() {
    console.log('this.notes', this.notes);
    this.notes.nativeElement.scrollLeft += 300;
  }
}
