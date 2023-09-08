import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent {
  show = false
  constructor(private readonly transloco$: TranslocoService) { }
  toggleShow() {
    this.show = !this.show
  }
  toggleLang(lang: string) {
    this.transloco$.setActiveLang(lang)
  }
}
