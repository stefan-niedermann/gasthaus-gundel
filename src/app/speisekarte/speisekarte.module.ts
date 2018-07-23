import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SpeisekarteComponent } from "./speisekarte.component";

@NgModule({
  declarations: [
    SpeisekarteComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule.forChild([
        { path: "", component: SpeisekarteComponent},
    ])
  ]
})
export class SpeisekarteModule { }
