import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent {
  public data: Record<string, any>
  public template: Record<string, any>
  constructor(private readonly transloco$: TranslocoService) { }

  ngOnInit(): void {
    this.transloco$.selectTranslateObject('LANDING_MODULE.CV')
    .subscribe(response => {
      console.log('response', response)
      this.data = response.data
      this.template = response.template
    })
  }

}
