import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  public projects: Array<{name: string, image: string, url: string, skills: Array<string>}> 
  public template: Record<string, any>;

  constructor(private readonly transloco$: TranslocoService){ 
  }

  ngOnInit(): void {
    this.transloco$.selectTranslateObject('LANDING_MODULE.ProjectsPage')
    .subscribe(template => {
      this.template = template;
      this.projects = template.projects;
    })
  }
}
