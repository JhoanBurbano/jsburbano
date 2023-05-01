import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { UiService } from 'src/app/landing/services/ui.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit{

  public template: Record<string, any>

  constructor(private readonly transloco$: TranslocoService, private readonly ui$: UiService){ }

  ngOnInit(): void {
    this.transloco$.selectTranslateObject('LANDING_MODULE.EditPage')
    .subscribe(template => {
      this.template = template
      this.ui$.stopLoading()
    })
  }

}
