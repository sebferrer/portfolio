import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LuPopoverModule } from '@lucca-front/ng/popover';
import { LuTooltipModule } from '@lucca-front/ng/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsService } from './infra';
import { ContactComponent } from './ui/contact';
import { HomeComponent } from './ui/home';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ContactComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		OverlayModule,
		LuTooltipModule,
		LuPopoverModule
	],
	providers: [
		ProjectsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
