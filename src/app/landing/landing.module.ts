import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { LinksComponent } from './components/links/links.component';
import { TranslocoModule } from '@ngneat/transloco';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { GalleryNotesComponent } from './components/gallery-notes/gallery-notes.component';
import { SafePipe } from '../pipes/safe.pipe';
import { MatIconModule } from '@angular/material/icon';
import  { MatDialogModule } from '@angular/material/dialog'
import { UiService } from './services/ui.service';
import { LandingService } from './services/landing.service';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from './services/notification.service';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './components/loader/loader.component';
import { SharedModule } from '../shared/shared.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';


@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    NavbarComponent,
    LinksComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    DocumentsComponent,
    GalleryNotesComponent,
    LoaderComponent,
    ProjectModalComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NgxTypedJsModule,
    TranslocoModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    ToastrModule.forRoot(),
    SharedModule,
    NgxExtendedPdfViewerModule,
    MatDialogModule,
  ],
  exports: [
    NavbarComponent
  ],
  providers: [UiService, LandingService, NotificationService]
})
export class LandingModule { }
