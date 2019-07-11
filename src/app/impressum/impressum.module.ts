import { NgModule } from '@angular/core';
import { ImpressumComponent } from './impressum.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ImpressumComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule.forChild([
        { path: '', component: ImpressumComponent},
    ])
  ]
})
export class ImpressumModule { }
