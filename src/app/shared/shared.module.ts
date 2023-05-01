import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetteringComponent } from './components/lettering/lettering.component';
import { TranslocoModule } from '@ngneat/transloco';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { MatIconModule } from '@angular/material/icon';
import { IconComponent } from './components/atoms/icon/icon.component';



@NgModule({
  declarations: [
    LetteringComponent,
    CurriculumComponent,
    IconComponent,
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
  ]
})
export class SharedModule { }
