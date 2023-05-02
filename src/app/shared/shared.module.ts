import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetteringComponent } from './components/lettering/lettering.component';
import { TranslocoModule } from '@ngneat/transloco';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { MatIconModule } from '@angular/material/icon';
import { IconComponent } from './components/atoms/icon/icon.component';
import { CoverLetterComponent } from './components/cover-letter/cover-letter.component';



@NgModule({
  declarations: [
    LetteringComponent,
    CurriculumComponent,
    IconComponent,
    CoverLetterComponent,
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    MatIconModule,
  ],
  exports: [
    LetteringComponent,
    CurriculumComponent,
    IconComponent,
    CoverLetterComponent,
  ]
})
export class SharedModule { }
