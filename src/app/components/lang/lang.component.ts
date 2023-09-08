import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit{
  show = false;
  lang: string = 'en';
  constructor(private readonly transloco$: TranslocoService) { }

  ngOnInit(): void {
    this.getLang()
  }

  getLang() {
    this.lang = this.transloco$.getActiveLang()
  }

  toggleShow() {
    this.show = !this.show
  }
  toggleLang(lang: string) {
    this.transloco$.setActiveLang(lang)
    this.getLang()
    this.toggleShow()
  }
}
