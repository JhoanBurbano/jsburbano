import { Component, Sanitizer } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {

  public template: Record<string, any>;
  public urlDocument: string;

  constructor(private readonly transloco$: TranslocoService, private readonly ui$: UiService) { }

  ngOnInit(): void {
    this.transloco$.selectTranslateObject('LANDING_MODULE.DocumentsPage')
    .subscribe(template => {
      this.template = template;
      this.selectFile(template['list'][0].url)
      this.ui$.stopLoading()
    })
  }

  selectFile(url: string){
    this.urlDocument = url;
  }
}
