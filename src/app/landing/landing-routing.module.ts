import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { LinksComponent } from './components/links/links.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { DocumentsComponent } from './components/documents/documents.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },{
        path: 'about-me',
        component: AboutComponent
      },{
        path: 'links',
        component: LinksComponent
      },{
        path: 'skills',
        component: SkillsComponent
      },{
        path: 'projects',
        component: ProjectsComponent
      },{
        path: 'contact',
        component: ContactComponent
      },{
        path: 'documents',
        component: DocumentsComponent
      },{
        path: '*/edit',
        loadChildren: () =>
        import('../modules/edit-profile/edit-profile.module').then((m) => m.EditProfileModule)
      },{
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      },{
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
