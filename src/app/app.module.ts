import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OeffnungszeitenComponent } from './oeffnungszeiten/oeffnungszeiten.component';
import { AnfahrtComponent } from './anfahrt/anfahrt.component';
import { SpeisekarteComponent } from './speisekarte/speisekarte.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'oeffnungszeiten',
    component: OeffnungszeitenComponent
  },
  {
    path: 'anfahrt',
    component: AnfahrtComponent
  },
  {
    path: 'speisekarte',
    component: SpeisekarteComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OeffnungszeitenComponent,
    AnfahrtComponent,
    SpeisekarteComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
