import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { UiService } from '../../services/ui.service';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  public projects: Array<{name: string, image: string, url: string, skills: Array<string>}> 
  public template: Record<string, any>;

  constructor(private readonly transloco$: TranslocoService, private readonly ui$: UiService, private readonly matDialog: MatDialog){ 
  }

  ngOnInit(): void {
    this.transloco$.selectTranslateObject('LANDING_MODULE.ProjectsPage')
    .subscribe(template => {
      this.template = template;
      this.projects = template.projects;
      this.ui$.stopLoading()
    })
  }

  openModalProject(project: any) {
    const dialogRef = this.matDialog.open(ProjectModalComponent, {
      data: project,
      maxWidth: '750px',
      minWidth: '320px',
      width: '100%',
    })
    dialogRef.afterClosed()
    .subscribe()
  }

  goToRedirect(url: string) {
    window.open(url, '_blank');
  }
}
