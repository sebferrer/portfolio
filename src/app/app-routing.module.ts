import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './ui/contact';
import { AppComponent } from './app.component';

const routes: Routes = [
	{
		path: '',
		component: AppComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	}
];

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
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
