import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule, Route } from '@angular/router';
import { Angulartics2Module, Angulartics2Piwik } from 'angulartics2';
import { MetaModule, MetaGuard } from '@ngx-meta/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OeffnungszeitenComponent } from './oeffnungszeiten/oeffnungszeiten.component';
import { AnfahrtComponent } from './anfahrt/anfahrt.component';
import { SpeisekarteComponent } from './speisekarte/speisekarte.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { OeffnungszeitenPipe } from './oeffnungszeiten/oeffnungszeiten.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImpressumComponent } from './impressum/impressum.component';

const routes: Route[] = [
	{
		path: '',
		canActivateChild: [MetaGuard],
		children: [
			{
				path: 'home',
				component: HomeComponent,
				data: {
					meta: {
						title: 'Gasthaus Gundel - Barthelmesaurach',
						description: '☎ Tel.: 09178 / 1503 - Lassen Sie sich verwöhnen mit fränkischen, griechischen und saisonalen Spezialitäten in gemütlichen Räumen'
					}
				}
			},
			{
				path: 'oeffnungszeiten',
				component: OeffnungszeitenComponent,
				data: {
					meta: {
						title: 'Gasthaus Gundel - Öffnungszeiten',
						description: '11:00 Uhr - 14:30 Uhr, 17:00 Uhr - 00:00 Uhr, Montag Ruhetag, Warme Küche bis 22:00 Uhr'
					}
				}
			},
			{
				path: 'anfahrt',
				component: AnfahrtComponent,
				data: {
					meta: {
						title: 'Gasthaus Gundel - Anfahrt',
						description: 'Nördlinger Straße 14, 91126 Barthelmesaurach, via B466'
					}
				}
			},
			{
				path: 'speisekarte',
				component: SpeisekarteComponent,
				data: {
					meta: {
						title: 'Gasthaus Gundel - Speisekarte',
						description: 'Fränkischen, griechischen und saisonalen Spezialitäten, wie Souvlaki, Karpfen, Salate, diverse Grillplatten, Kalamaria und viele mehr.'
					}
				}
			},
			{
				path: 'impressum',
				component: ImpressumComponent,
				data: {
					meta: {
						title: 'Gasthaus Gundel - Impressum',
						description: 'Inhaltliche und technische Verantwortliche und rechtliche Informationen.'
					}
				}
			},
			{
				path: '**',
				redirectTo: '/home'
			}
		]
	}
]

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
		RouterModule.forRoot(routes),
		MetaModule.forRoot()
	],
	providers: [
		AppService,
		{
			provide: LOCALE_ID,
			useValue: 'de-DE'
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
