import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lettering',
  templateUrl: './lettering.component.html',
  styleUrls: ['./lettering.component.scss']
})
export class LetteringComponent implements OnInit {

  @Input() white: boolean;
  @Input() size: "s" | "m" | "l";

  @Input() set lettering(value: Array<string>){
    this.letters = value.map(e => e.split(''))
  }
  @Input() set subtitle(value: string){
    this.title = value.split('')
  }
  public letters: Array<Array<string>>;
  public title: Array<string>;
  private number: number;

  constructor() {
    this.letters = []
    this.title = []
    this.number=0
  }

  ngOnInit(): void {
  }

  increareIndex(){
    this.number+=1
    console.log(this.number)
  }

}
