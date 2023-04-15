import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public template: Record<string, any>;

  constructor(private readonly transloco$: TranslocoService) {
  }

  ngOnInit(): void {
    this.transloco$.selectTranslateObject("LANDING_MODULE.HomePage")
    .subscribe((template)=>{
      this.template = template
    })
  }

}
