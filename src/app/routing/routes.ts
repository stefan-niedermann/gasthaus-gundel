import { DatenschutzerklaerungComponent } from './../datenschutzerklaerung/datenschutzerklaerung.component';
import { ImpressumComponent } from 'app/impressum/impressum.component';
import { SpeisekarteComponent } from 'app/speisekarte/speisekarte.component';
import { AnfahrtComponent } from 'app/anfahrt/anfahrt.component';
import { OeffnungszeitenComponent } from 'app/oeffnungszeiten/oeffnungszeiten.component';
import { HomeComponent } from 'app/home/home.component';
import { MetaGuard } from '@ngx-meta/core';
import { Route } from '@angular/router';

export const routes: Route[] = [
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
				path: 'datenschutzerklaerung',
				component: DatenschutzerklaerungComponent,
				data: {
					meta: {
						title: 'Gasthaus Gundel - Datenschutzerklärung',
						description: 'Datenschutzerklärung im Sinne der Europäischen Datenschutzgrundverordnung.'
					}
				}
			},
			{
				path: '**',
				redirectTo: '/home'
			}
		]
	}
];
