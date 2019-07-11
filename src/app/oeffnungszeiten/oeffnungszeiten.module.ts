import { NgModule, LOCALE_ID } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { CommonModule, registerLocaleData } from "@angular/common";
import { RouterModule } from "@angular/router";
import { OeffnungszeitenComponent } from "./oeffnungszeiten.component";
import { OeffnungszeitenPipe } from "./oeffnungszeiten.pipe";
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';

registerLocaleData(localeDe, localeDeExtra);

@NgModule({
  declarations: [
    OeffnungszeitenComponent,
    OeffnungszeitenPipe
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule.forChild([
        { path: "", component: OeffnungszeitenComponent},
    ])
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    }
  ]
})
export class OeffnungszeitenModule { }
