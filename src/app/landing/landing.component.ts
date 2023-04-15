import { Component, OnInit } from '@angular/core';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public isActive: boolean;
  public isActive$ = this.ui$.isActive();

  constructor(private readonly ui$: UiService) {}

  ngOnInit(): void {
    this.isActive$.subscribe((value) => {
      console.log('value', value, this.isActive)
      this.isActive = value
    });
  }

  setMenu() {
    this.isActive = !this.isActive;
    this.ui$.setNavBar();
  }
}
