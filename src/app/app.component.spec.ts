import { MetaModule, MetaService, MetaLoader } from '@ngx-meta/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './app.service';
import { Angulartics2Module, Angulartics2Piwik } from 'angulartics2';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
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
				BrowserAnimationsModule,
				MetaModule
			],
			providers: [
				{ provide: APP_BASE_HREF, useValue: '/' },
				{ provide: Angulartics2Piwik, useValue: {} },
				{ provide: AppService, useClass: AppService },
				{ provide: MetaService, useClass: MetaService },
				{ provide: MetaLoader, useClass: MetaLoader }
			]
		}).compileComponents();
	}));

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
});
