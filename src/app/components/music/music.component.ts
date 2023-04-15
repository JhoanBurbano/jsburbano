import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent  {

  status: string = 'OFF';
  audio = new Audio('assets/music.mp3')

  clickOnSwitch(target: HTMLInputElement){
    if(target.checked){
      this.audio.play()
      return this.status = 'ON';
    }
    this.audio.pause()
    return this.status='OFF'
  }

}
