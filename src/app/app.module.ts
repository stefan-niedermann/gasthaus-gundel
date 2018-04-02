import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2Piwik } from 'angulartics2/piwik';
import { MetaModule, MetaGuard } from '@ngx-meta/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OeffnungszeitenComponent } from './oeffnungszeiten/oeffnungszeiten.component';
import { AnfahrtComponent } from './anfahrt/anfahrt.component';
import { SpeisekarteComponent } from './speisekarte/speisekarte.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { FormsModule } from '@angular/forms';
import { OeffnungszeitenPipe } from './oeffnungszeiten/oeffnungszeiten.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImpressumComponent } from './impressum/impressum.component';
import { SpeisekarteService } from 'app/speisekarte/speisekarte.service';
import { RoutingModule } from 'app/routing/routing.module';
import { MaterialModule } from 'app/material/material.module';

registerLocaleData(localeDe, localeDeExtra);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OeffnungszeitenComponent,
    AnfahrtComponent,
    SpeisekarteComponent,
    OeffnungszeitenPipe,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    Angulartics2Module.forRoot([Angulartics2Piwik]),
    MetaModule.forRoot(),
    RoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    AppService,
    SpeisekarteService,
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
