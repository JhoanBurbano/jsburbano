import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent {
  status: string = 'OFF';
  audio = new Audio('assets/music.mp3');
  show = false;
  icons = {
    "OFF": "play_arrow",
    "ON": "pause"
  }
  @ViewChild('switch') switch!: ElementRef<HTMLInputElement>;

  clickOnSwitch() {
    const target = this.switch?.nativeElement as HTMLInputElement;
    if (target.checked) {
      this.audio.play();
      return (this.status = 'ON');
    }
    this.audio.pause();
    return (this.status = 'OFF');
  }

  stop() {
    if (this.audio.currentTime > 0) {
      this.audio.currentTime = 0;
      this.switch.nativeElement.click();
    }
  }

  setVolume(increment: number) {
    var newVolume = this.audio.volume + increment;
    if (newVolume >= 0 && newVolume <= 1) {
      this.audio.volume = newVolume;
    }
  }

  viewChange(event: any){
    console.log('event', event)
  }

  toggleShow() {
    this.show = !this.show;
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k' + 'Im a very long label';
    }

    return value;
  }
}
