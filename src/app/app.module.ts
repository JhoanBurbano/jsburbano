import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { MatSliderModule } from '@angular/material/slider'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgParticlesModule } from 'ng-particles';
import { ParticlesComponent } from './components/particles/particles.component';
import { MusicComponent } from './components/music/music.component';
import { LandingModule } from './landing/landing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NocacheInterceptor } from './nocache.interceptor';
import { FormsModule } from '@angular/forms';
import { LangComponent } from './components/lang/lang.component';
import { TranslocoModule } from '@ngneat/transloco';
@NgModule({
  declarations: [
    AppComponent,
    ParticlesComponent,
    MusicComponent,
    LangComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    LandingModule,
    HttpClientModule,
    TranslocoRootModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSliderModule,
    FormsModule,
    TranslocoModule
    ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: NocacheInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
