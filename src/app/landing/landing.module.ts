import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LetteringComponent } from './components/lettering/lettering.component';
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
import { UiService } from './services/ui.service';


@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    LetteringComponent,
    NavbarComponent,
    LinksComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    DocumentsComponent,
    GalleryNotesComponent,
    SafePipe,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NgxTypedJsModule,
    TranslocoModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [UiService]
})
export class LandingModule { }
