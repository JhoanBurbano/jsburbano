import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksComponent } from './landing/components/links/links.component';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },{
    path: 'links',
    component: LinksComponent
  },{
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },{
    path: '**',
    redirectTo: '/landing',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
