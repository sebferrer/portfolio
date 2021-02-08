import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './ui/home';
import { ContactComponent } from './ui/contact';
import { ProjectsService } from './infra';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ContactComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [
		ProjectsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
