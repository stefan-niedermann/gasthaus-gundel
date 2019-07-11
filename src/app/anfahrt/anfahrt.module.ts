import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnfahrtComponent } from './anfahrt.component';

@NgModule({
  declarations: [
    AnfahrtComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule.forChild([
        { path: '', component: AnfahrtComponent},
    ])
  ]
})
export class AnfahrtModule { }
