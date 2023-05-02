import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.scss']
})
export class CoverLetterComponent implements OnInit{
  public template: Record<string, any>

  constructor(private readonly transloco$: TranslocoService){}

  ngOnInit(): void {
    this.transloco$.selectTranslateObject('LANDING_MODULE.CoverLetter')
    .subscribe( template => {
      this.template = template;
    })
  }
}
