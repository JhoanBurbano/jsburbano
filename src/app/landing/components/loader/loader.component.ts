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
  progress$: Observable<number>;
  timer: number = 50

  constructor(private loadingService: UiService) {}

  ngOnInit() {
    this.loadingService.startLoading(this.timer);
    this.isLoading$ = this.loadingService.getIsLoading();
    this.progress$ = this.loadingService.getProgress();
  }

  ngOnDestroy() {
    this.loadingService.stopLoading();
  }
}
