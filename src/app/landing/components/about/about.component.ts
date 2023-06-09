import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  public paragraphs: Array<string>
  public template: Record<string, any>
  constructor (private readonly transloco$: TranslocoService, private readonly ui$: UiService) {}

  ngOnInit(): void {
    this.transloco$.selectTranslateObject('LANDING_MODULE.AboutPage')
    .subscribe(template => {
      this.paragraphs = template.paragraphs
      this.template = template
      this.ui$.stopLoading()
    })
  }
}
