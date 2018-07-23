import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { OeffnungszeitenComponent } from "./oeffnungszeiten.component";
import { OeffnungszeitenPipe } from "./oeffnungszeiten.pipe";

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
  ]
})
export class OeffnungszeitenModule { }
