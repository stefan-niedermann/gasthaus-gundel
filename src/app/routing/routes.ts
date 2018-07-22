import { DatenschutzerklaerungComponent } from './../datenschutzerklaerung/datenschutzerklaerung.component';
import { ImpressumComponent } from 'app/impressum/impressum.component';
import { SpeisekarteComponent } from 'app/speisekarte/speisekarte.component';
import { AnfahrtComponent } from 'app/anfahrt/anfahrt.component';
import { OeffnungszeitenComponent } from 'app/oeffnungszeiten/oeffnungszeiten.component';
import { HomeComponent } from 'app/home/home.component';
import { Route } from '@angular/router';

export const routes: Route[] = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'oeffnungszeiten',
		component: OeffnungszeitenComponent
	},
	{
		path: 'anfahrt',
		component: AnfahrtComponent
	},
	{
		path: 'speisekarte',
		component: SpeisekarteComponent
	},
	{
		path: 'impressum',
		component: ImpressumComponent
	},
	{
		path: 'datenschutzerklaerung',
		component: DatenschutzerklaerungComponent
	},
	{
		path: '**',
		redirectTo: '/home'
	}
];
