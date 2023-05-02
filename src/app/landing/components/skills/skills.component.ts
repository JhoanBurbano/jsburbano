import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public skills: Array<{
    name: string;
    status: 'basic' | 'intermediate' | 'advance' | 'expert';
    level: number;
    years: string;
  }>;
  public experiences: Array<{
    job: string;
    company: string;
    years: string;
    description: string;
  }>;
  public paragraphs: Array<string>;
  public pageActive: 'notes' | 'description';
  public tabs: Array<string>;
  public template: Record<string, any>;
  public tabActive: string;
  @ViewChild('notes') notes: ElementRef;

  constructor(private readonly transloco$: TranslocoService, private readonly ui$: UiService) {}

  ngOnInit(): void {
    this.transloco$
      .selectTranslateObject('LANDING_MODULE.SkillsPage')
      .subscribe((template) => {
        this.template = template;
        this.skills = template.skills;
        this.experiences = template.experiences;
        this.paragraphs = template.paragraphs;
        this.tabs = template.skills.map((set) => set.tab);
        this.setTab(this.tabs[0]);
        if(window.innerWidth <= 1200){
          this.pageActive = 'notes'
        }
        this.ui$.stopLoading()
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth <= 1200 ){
      this.pageActive = 'notes'
    }
  }

  nextControl(action: string) {
    switch (action) {
      case '>':
        if (this.notes.nativeElement.scrollLeft === 0)
          return (this.notes.nativeElement.scrollLeft += 35);
        if (
          this.notes.nativeElement.clientWidth * 2 <
          this.notes.nativeElement.scrollWidth -
            this.notes.nativeElement.scrollLeft
        )
          return (this.notes.nativeElement.scrollLeft +=
            this.notes.nativeElement.clientWidth + 10);
        return (this.notes.nativeElement.scrollLeft +=
          this.notes.nativeElement.scrollWidth -
          this.notes.nativeElement.scrollLeft +
          40);
      case '<':
        if (
          this.notes.nativeElement.scrollLeft >
          this.notes.nativeElement.clientWidth + 45
        )
          return (this.notes.nativeElement.scrollLeft -=
            this.notes.nativeElement.clientWidth + 10);
        return (this.notes.nativeElement.scrollLeft -=
          this.notes.nativeElement.clientWidth + 45);
    }
  }

  setTab(tab: string) {
    this.skills = this.template['skills'].find(
      (set) => set.tab === tab
    ).content;
    this.tabActive = tab;
  }

  changePage(){
    if(this.pageActive === 'description'){
      return this.pageActive = 'notes'
    }
    return this.pageActive = 'description'
  }
}
