import { Route } from '@angular/router';

export const routes: Route[] = [
	{
		path: 'home',
		loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'oeffnungszeiten',
		loadChildren: () => import('../oeffnungszeiten/oeffnungszeiten.module').then(m => m.OeffnungszeitenModule)
	},
	{
		path: 'anfahrt',
		loadChildren: () => import('../anfahrt/anfahrt.module').then(m => m.AnfahrtModule)
	},
	{
		path: 'speisekarte',
		loadChildren: () => import('../speisekarte/speisekarte.module').then(m => m.SpeisekarteModule)
	},
	{
		path: 'impressum',
		loadChildren: () => import('../impressum/impressum.module').then(m => m.ImpressumModule)
	},
	{
		path: 'datenschutzerklaerung',
		loadChildren: () => import('../datenschutzerklaerung/datenschutzerklaerung.module').then(m => m.DatenschutzerklaerungModule)
	},
	{
		path: '**',
		redirectTo: '/home'
	}
];
