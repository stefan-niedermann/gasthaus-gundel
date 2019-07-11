import { NgModule } from '@angular/core';
import { DatenschutzerklaerungComponent } from './datenschutzerklaerung.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DatenschutzerklaerungComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule.forChild([
        { path: '', component: DatenschutzerklaerungComponent},
    ])
  ]
})
export class DatenschutzerklaerungModule { }
