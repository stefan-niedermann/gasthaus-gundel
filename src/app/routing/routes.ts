import { Route } from '@angular/router';

export const routes: Route[] = [
	{
		path: 'home',
		loadChildren: '../home/home.module#HomeModule'
	},
	{
		path: 'oeffnungszeiten',
		loadChildren: '../oeffnungszeiten/oeffnungszeiten.module#OeffnungszeitenModule'
	},
	{
		path: 'anfahrt',
		loadChildren: '../anfahrt/anfahrt.module#AnfahrtModule'
	},
	{
		path: 'speisekarte',
		loadChildren: '../speisekarte/speisekarte.module#SpeisekarteModule'
	},
	{
		path: 'impressum',
		loadChildren: '../impressum/impressum.module#ImpressumModule'
	},
	{
		path: 'datenschutzerklaerung',
		loadChildren: '../datenschutzerklaerung/datenschutzerklaerung.module#DatenschutzerklaerungModule'
	},
	{
		path: '**',
		redirectTo: '/home'
	}
];
