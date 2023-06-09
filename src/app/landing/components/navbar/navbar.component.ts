import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { switchMap } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public template: Record<string, any>;
  public links: Array<{ title: string; action: string }>;
  public user: Record<string, any>;

  constructor(
    private readonly location: Router,
    private readonly transloco$: TranslocoService,
    private readonly ui$: UiService
  ) {}

  ngOnInit(): void {
    this.transloco$
      .selectTranslateObject('LANDING_MODULE.NavBar')
      .pipe(
        switchMap((template) => {
          this.links = template.links;
          this.template = template;
          return this.transloco$.selectTranslateObject(
            'LANDING_MODULE.Profile'
          );
        })
      )
      .subscribe((user) => {
        this.user = user;
        this.ui$.stopLoading();
      });
  }

  hideNavbar() {
    if (window.innerWidth <= 850) {
      this.ui$.setNavBar();
    }
  }

  onClickOption(action: string) {
    this.hideNavbar();
    let currentPath = this.location.url;
    if (!currentPath.includes(action)) return this.ui$.startLoading();
  }

  goHome() {
    this.location.navigate(['']);
    if (window.innerWidth <= 850) {
      this.ui$.setNavBar();
    }
  }
}
