import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './ui/contact';
import { HomeComponent } from './ui/home';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes,
			{
				useHash: true,
				scrollPositionRestoration: 'enabled',
				relativeLinkResolution: 'legacy'
			}
		)
	],
	exports: [RouterModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
