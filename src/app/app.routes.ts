import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'all-contacts',
		pathMatch: 'full'
	},
	{
		path: 'all-contacts',
		loadComponent: () =>
			import('./pages/all-contacts/all-contacts.page').then(
				(m) => m.AllContactsPage
			)
	}
];
