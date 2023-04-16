import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgParticlesModule } from 'ng-particles';
import { ParticlesComponent } from './components/particles/particles.component';
import { MusicComponent } from './components/music/music.component';
import { LandingModule } from './landing/landing.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ParticlesComponent,
    MusicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    LandingModule,
    HttpClientModule,
    TranslocoRootModule,
    BrowserAnimationsModule,
    MatIconModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
