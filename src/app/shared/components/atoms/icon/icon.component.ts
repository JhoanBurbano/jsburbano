import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() set icon(value: string) {
    this.iconName = value;
    this.iconUrl = `${environment.AWS_URL.assets}imgs/icons/${value}.svg`;
  }
  public iconUrl: string;
  public iconName:string;
}
