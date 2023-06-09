import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isLoading$: Observable<boolean>;

  constructor(private loadingService: UiService) {}

  ngOnInit() {
    this.loadingService.startLoading();
    this.isLoading$ = this.loadingService.getIsLoading();
  }

  ngOnDestroy() {
    this.loadingService.stopLoading();
  }
}
