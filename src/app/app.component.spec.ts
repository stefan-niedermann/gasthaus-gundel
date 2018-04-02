import { MetaModule, MetaService, MetaLoader } from '@ngx-meta/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './app.service';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2Piwik } from 'angulartics2/piwik';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/material/material.module';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MaterialModule,
        RouterModule.forRoot([]),
        Angulartics2Module,
        NoopAnimationsModule,
        MetaModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: Angulartics2Piwik, useValue: {} },
        AppService,
        MetaService,
        MetaLoader
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
